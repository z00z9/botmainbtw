(function() {
  $.bind("command", function(event) {
    var sender = event.getSender();
    var command = event.getCommand();
    var args = event.getArgs();

    if (command.equalsIgnoreCase("stats") && args && args.length) {
      var req = args[0].toLowerCase();

      // get raw api data
      function getData(account) {
        var HttpRequest = Packages.com.gmt2001.HttpRequest;
        var HashMap = Packages.java.util.HashMap;
        var h = new HashMap(1);
        var r = HttpRequest.getData(
          HttpRequest.RequestType.GET,
          "https://ow-api.com/v1/stats/pc/us/" + account + "/heroes/mercy",
          "",
          h
        );
        if (r.success) {
          return JSON.parse(r.content);
        } else {
          $.say("Error connecting to API"); // do debug stuff here?
        }
      }

      // format data from api
      function formatData(account) {
        var data = getData(account);
        return {
          name: data.name,
          level: data.prestige * 100 + data.level,
          sr: parseInt(data.rating),
          winRate: data.competitiveStats.topHeroes.mercy.winPercentage,
          gamesPlayed: data.competitiveStats.games.played,
          totalGamesWon: data.gamesWon,
          totalMedals: data.competitiveStats.awards.medals,
          goldMedals: data.competitiveStats.awards.medalsGold,
          hours: parseInt(
            data.competitiveStats.topHeroes.mercy.timePlayed.split(" ")[0]
          ),
          totalHeals:
            data.competitiveStats.careerStats.mercy.assists.healingDone,
          bestHeals:
            data.competitiveStats.careerStats.mercy.assists
              .healingDoneMostInGame,
          damage:
            data.competitiveStats.careerStats.mercy.miscellaneous
              .damageAmplified,
          totalRes:
            data.competitiveStats.careerStats.mercy.heroSpecific
              .playersResurrected,
          mostRes:
            data.competitiveStats.careerStats.mercy.heroSpecific
              .playersResurrectedMostInGame
        };
      }

      function accountMessage(account) {
        var stats = formatData(account);
        return (
          stats.name +
          " Stats (since last placements) -> SR: " +
          stats.sr +
          " | Win Rate: " +
          stats.winRate +
          "% | Hours: " +
          stats.hours +
          " | Level: " +
          stats.level
        );
      }

      var hgm;
      var orphanix;
      var passive;
      var vale;

      // only make 4 api calls if best overall or average is called
      if (req == "average" || req == "best" || req == "overall") {
        hgm = formatData("HealsGoodMan-1418");
        orphanix = formatData("%C7%BErphanix-1961");
        passive = formatData("Passive-21485");
        vale = formatData("Vale-1195");
      }

      var accounts = [hgm, orphanix, passive, vale];
      var divisor = accounts.length;

      // add all of a piece of info across accounts
      function total(key) {
        return accounts
          .map(function(el) {
            return el[key];
          })
          .reduce(function(sum, value) {
            return sum + value;
          }, 0);
      }

      // get Vale's average stats across S6 accounts
      function average() {
        function getAverage(key, split) {
          split = split || divisor;
          return Math.round(total(key) / split);
        }
        var average = {
          sr: getAverage("sr"),
          winRate: getAverage("winRate"),
          heals: getAverage("totalHeals", total("gamesPlayed")),
          res: getAverage("totalRes", total("gamesPlayed"))
        };
        return (
          "Average Stats (current season) -> SR: " +
          average.sr +
          " | Win Rate: " +
          average.winRate +
          "% | Healing Done: " +
          average.heals +
          " | Resurrections: " +
          average.res
        );
      }

      // find Vale's best stats from categories across accounts
      function best() {
        function findBest(key) {
          return accounts
            .map(function(el) {
              return el[key];
            })
            .reduce(function(prev, curr) {
              return Math.max(prev, curr);
            });
        }
        var bests = {
          level: findBest("level"),
          sr: findBest("sr"),
          winRate: findBest("winRate"),
          heals: findBest("bestHeals"),
          res: findBest("mostRes")
        };
        return (
          "Highest ATM (current season) -> SR: " +
          bests.sr +
          " | Level: " +
          bests.level +
          " | Win Rate: " +
          bests.winRate +
          "% | Healing done: " +
          bests.heals +
          " | Resurrections: " +
          bests.res
        );
      }

      // Vale's overall (combined) comp stats for S6
      function overall() {
        var totals = {
          wins: total("totalGamesWon"),
          totalMedals: total("totalMedals"),
          goldMedals: total("goldMedals"),
          hours: total("hours"),
          heals: total("totalHeals"),
          damage: total("damage"),
          res: total("totalRes")
        };
        return (
          "Overall Stats (current season) -> Wins: " +
          totals.wins +
          " | Hours: " +
          totals.hours +
          " | Healing Done: " +
          totals.heals +
          " | Damage Boosted: " +
          totals.damage +
          " | Resurrections: " +
          totals.res +
          " | Medals - Gold Medals: " +
          totals.goldMedals +
          " / Total Medals: " +
          totals.totalMedals
        );
      }

      if (req == "average") $.say(average());
      else if (req == "best") $.say(best());
      else if (req == "overall") $.say(overall());
      else if (req == "healsgoodman")
        $.say(accountMessage("HealsGoodMan-1418"));
      else if (req == "orphanix" || req == "ǿrphanix")
        $.say(accountMessage("%C7%BErphanix-1961"));
      else if (req == "passive") $.say(accountMessage("Passive-21485"));
      else if (req == "vale") $.say(accountMessage("Vale-1195"));
      else
        $.say(
          "To get info on Vale's current stats, put overall, average, best, or an account name after !stats (Ex. !stats average or !stats orphanix)"
        );
      return;
    } else {
      $.say(
        "To get info on Vale's current stats, put overall, best, average, or an account name after !stats (Ex. !stats average or !stats orphanix)"
      );
    }
  });

  $.bind("initReady", function() {
    $.registerChatCommand("./commands/stats.js", "stats", 7);
  });
})();

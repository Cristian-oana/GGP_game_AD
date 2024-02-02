(() => {
  window.gg = {
    /** Small blind setting. **/
    smallBlind: 25,

    /** Big blind setting. **/
    bigBlind: 50,

    /** Replenish the player's chips at the end of each round with this amount. **/
    rebuyAmount: 500,

    /** Set how many rounds will to play before showing the game over CTA. **/
    roundsToPlayBeforeCTA: 5,

    /** Initial card position. Initial action will be dealer position + 3. **/
    initialDealerPosition: 0,

    /** Set the AI player action delay. Actual time will be a random number between zero and this value. **/
    fakePlayerActionDelayMax: 1000,

    /** Set how long to display the initial instructions / intro screen before automatically starting the game. **/
    startGameDelay: 20000,

    /** Set true to deal random cards instead of the scripted hands. **/
    useShuffledDeck: false,

    /** Some regions will not allow us to display the in-game offer at the end of the game. Set to false to link directly to the CTA. **/
    inGameOffer: true,

    /** Value should be set to the base64 encoded image string. (e.g. data:image/png;base64,ivBORwk...) **/
    legalImage:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA3UAAABaCAMAAAAowo9sAAACB1BMVEUAAAD/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9+f////////////////////////////////////////////////////////////////////////////////x9un////////////////////////9uBL////////////////////////////////////9uBP////////////////4thH///+KwkD8uBL////////9rxH////////9uRH9uBH////8uRL////7thH////////8uBL////9uRL///+Lxj/8uBL8uBKLxj/6tRKJw0C9mi38uBL8uRL8uRJ4q0a/vSdWgVaKxECkjziLxD76uRL6tRD///8AN3z8uBOLxT/SpSQ1VGaKxEAORHYsZGj5+vzCz+AFPHpOiFlqirIhUYwXTHJxqU+AukPo7fEKPoF3sUiZsMuFn8BOdKM1YZcdTos5cmNEfV5hmlHc4+ywwdbi8M4QRISy2X8eVm6j0WZBWWCZzFZim1GPx0TkrRzw9Pjy+erU3unw+OaftM2RqMbL5akrWZJblVN9ekjOoSbXpiIIxVU4AAAAeHRSTlMAv3/fIJ8Q70A/XzCPz09vYK8fgHD415A3KOcYpwjy9chIHRTEDAT62xmzl4NaSxIKu/78t5RjLN6kPAbk4dPMjCPih2wu6nglIZxS9ax1VkUg7cmOfDkPvnNdSuyqaEVDNM+9ayfkxKSBLvvy7Ld7KxvjsHtWNzBH9vVVAAAfi0lEQVR42uzVzWrCQBRA4Rtm8tPahoiBPkwfw3cQxE1LKdwwoEKFVnDV7vusJQ01o0iqEgcX51sO4c4k5DACAAAAAAAAAAAAAAAAAACA87yOZ67TZPosAHrk/jd5EgCXqm62+VgfyO5R0MnmeZb0OjAbHF4uskyukM2L5sSdrn1bG0dWQnCe+WpRVW/L77nbMxX4kqGqka0y1Vo0kNMUui9uxo/qgWlsxVMvG/01vHB4Ro0crzlvzcRWArJ3fW8bqaYSgh/dsmos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",

    /** All-In reward settings correspond to the reward offered in the game's footer. **/
    allInReward: {
      /** Increment the reward by this amount each time the player goes all in. **/
      incrementBy: 2,

      /** This is the max (and actual) reward offered at the end of the game. **/
      maxReward: 20,

      /** Set the reward starting amount? **/
      startingAmount: 10,
    },

    /** Format by which to display chip amounts on the table. **/
    amountDisplay: {
      /** The string "amt" will be replaced by the value. **/
      format: "amt",

      /** How many decimals to display. **/
      decimals: 0,

      /** Used to avoid floating point related errors. If using dollars for example, set values in cents and divideBy 100. **/
      divideBy: 1,
    },

    /** Format by which to display real money amounts. **/
    moneyDisplay: {
      /** The string "amt" will be replaced by the value. **/
      format: "$amt",

      /** How many decimals to display. **/
      decimals: 0,

      /** Used to avoid floating point related errors. If using dollars for example, set values in cents and divideBy 100. **/
      divideBy: 1,
    },

    /** Fortune pot settings **/
    fortunePot: {
      /** Display amount shown under the "up to" label on the pot image. **/
      upToAmount: 2500,

      /** The actual awarded amount when the fortune is awarded. **/
      rewardAmount: 2500,

      /** Award the fortune after the user goes all in this many times. **/
      awardAfterAllInsCount: 3,
    },

    /** Player settings. **/
    players: [
      {
        alias: "You",
        avatar: "you",
        totalBalance: 2500,
        initialChipsOnTable: 500, //subtracted from total balance
        numAllIns: 0,
        numFolds: 0,
      },
      {
        alias: "Kevin Martin",
        avatar: "kevin-martin",
        totalBalance: 10000,
        initialChipsOnTable: 500,
      },
      {
        alias: "ElkY",
        avatar: "elky",
        totalBalance: 10000,
        initialChipsOnTable: 500,
      },
      {
        alias: "D. Negreanu",
        avatar: "daniel-negreanu",
        totalBalance: 10000,
        initialChipsOnTable: 500,
      },
    ],

    /** Rounds script. **/
    rounds: [
      {
        // #1 - winning hand
        hands: [
          ["Kd", "Jd"],
          ["As", "Jc"], // all in
          ["9s", "9h"], // all in
          ["6h", "7h"], // folds
        ],
        communityCards: ["4d", "Jh", "3d", "Ad", "9c"],
      },
      {
        // #2 - bad beat hand - negreanu gloats + ggcare opportunity
        hands: [
          ["Qc", "Ah"],
          ["Qh", "Ks"], // all in (backup to if player folds for snapcam)
          ["7c", "4c"], // folds
          ["Td", "Th"], // all in
        ],
        communityCards: ["Ac", "Qd", "Tc", "Qs", "Ts"],
        ggCareReward: 1500,
        snapCam: {
          duration: 3000,
          key: "negreanu-win",
          seat: 3,
        },
      },
      {
        // #3 - player loses if they play
        hands: [
          ["9d", "Qc"],
          ["Ah", "4s"], // all in
          ["7c", "4c"], // folds
          ["8d", "5h"], // folds
        ],
        communityCards: ["7d", "8s", "Th", "5s", "7s"],
      },
      {
        // #4 clear all in - wins
        hands: [
          ["Ac", "9c"],
          ["2s", "7d"], // fold
          ["Qh", "Qd"], // all in
          ["Ks", "Tc"], // all in
        ],
        communityCards: ["Jh", "3d", "Kh", "5s", "Ad"],
        snapCam: {
          duration: 3000,
          key: "elky-beat",
          seat: 2,
        },
      },
      {
        // #5 - clear all in - wins
        hands: [
          ["Jc", "Qh"],
          ["2c", "4c"], // fold
          ["Tc", "Jh"], // all in
          ["4c", "7c"], // fold
        ],
        communityCards: ["8c", "5c", "Qd", "3h", "3s"],
      },
      {
        // #6 hand not played but seen
        hands: [
          ["Ad", "As"],
          ["Ts", "Tc"], // all in
          ["Js", "Jh"], // all in
          ["Qh", "Qs"], // all in
        ],
        communityCards: ["7h", "9h", "2s", "2c", "4d"],
      },
    ],
  };
})();

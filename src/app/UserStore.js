import create from 'zustand';

const userStore = create(set => ({
    userInfoLoaded: false,
    setUserInfoLoaded: value => set({ userInfoLoaded: value }),

    isUserLoggedIn: false,
    setIsUserLoggedIn: value => set({ isUserLoggedIn: value }),

    userInfo: {},
    setUserInfo: value => set({ userInfo: value }),

    currentCard: {},
    setCurrentCard: value => set({ currentCard: value }),

    handleCurrentCard: () => {
        const cardsInfo = userStore.getState().cardsInfo;
        const currentCardIndex = userStore.getState().currentCardIndex;
        const setCurrentCard = userStore.getState().setCurrentCard;

        let newCardIndex = currentCardIndex;
        if (currentCardIndex >= cardsInfo.length) {
            newCardIndex = cardsInfo.length - 1;
        }

        if (newCardIndex <= -1) {
            setCurrentCard({});
            return;
        }

        setCurrentCard(cardsInfo[newCardIndex]);
    },

    currentCardIndex: 0,
    setCurrentCardIndex: value => {
        const cards_length = userStore.getState().cardsInfo.length;

        if (value >= cards_length) {
            value = 0;
        } else if (value < 0) {
            value = cards_length - 1;
        }

        set({ currentCardIndex: value })
        userStore.getState().handleCurrentCard();
    },

    cardsInfo: [],
    setCardsInfo: value => {
        set({ cardsInfo: value });
        userStore.getState().handleCurrentCard();
    },

    fromCard: {},
    setFromCard: value => {
        set({ fromCard: value });
    },

    toCard: {},
    setToCard: value => {
        set({ toCard: value });
    }

}))

export default userStore;
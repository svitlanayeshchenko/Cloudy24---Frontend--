import create from 'zustand';

const appModalBurgerStore = create(set => ({
    modalBurgerMenuVisible: false,
    setmodalBurgerMenuVisible: value => set({ modalBurgerMenuVisible: value })
}));

export default appModalBurgerStore;
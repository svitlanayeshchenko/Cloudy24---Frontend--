import create from 'zustand';

const appModalStore = create(set => ({
    modalWindowVisible: false,
    setmodalWindowVisible: value => set({ modalWindowVisible: value })
}));

export default appModalStore;
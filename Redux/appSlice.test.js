import appSlice, { setScanViewVisible, setViewContact } from "./appSlice";

describe("appSlice ", function () {
    let initialState;
    beforeEach(() => {
        initialState = {
            viewContactInfo: false,
            scanViewVisible: true,
            previousPage: false,
            contactInfo: {},
            alertInfo: {
                visibility: false,
                theme: "",
            }
        }
    })
    it("should be able to set the currentViewContact", function () {
        const nextState = appSlice(initialState, setViewContact(true));
        expect(nextState.viewContactInfo).toBe(true);
    });
    it("should be able to set the setScannedVisible", function () {
        const nextState = appSlice(initialState, setScanViewVisible(false));
        expect(nextState.scanViewVisible).toBe(false);
    });
});

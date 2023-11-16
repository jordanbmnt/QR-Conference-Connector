import appSlice, { setAlertTheme, setAlertVisibility, setContactInfo, setPreviousPage, setScanViewVisible, setViewContact } from "./appSlice";

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
    it("should be able to set the scannedVisible", function () {
        const nextState = appSlice(initialState, setScanViewVisible(false));
        expect(nextState.scanViewVisible).toBe(false);
    });
    it("should be able to set the previousPage", function () {
        const nextState = appSlice(initialState, setPreviousPage(true));
        expect(nextState.previousPage).toBe(true);
    });
    it("should be able to set the contactInfo", function () {
        const nextState = appSlice(initialState, setContactInfo({ name: 'jordan' }));
        expect(nextState.contactInfo).toEqual({ name: 'jordan' });
    });
    it("should be able to set the alertInfo", function () {
        let nextState = appSlice(initialState, setAlertVisibility(true));
        expect(nextState.alertInfo.visibility).toBe(true);
        nextState = appSlice(initialState, setAlertTheme("error"));
        expect(nextState.alertInfo.theme).toBe("error");
    });
});

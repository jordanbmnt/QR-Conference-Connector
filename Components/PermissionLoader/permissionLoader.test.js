import PermissionLoader from "./PermissionLoader";
import renderer from 'react-test-renderer';

describe("PermissionLoader", function(){
    const loader = renderer.create(
            <PermissionLoader />
    ).toJSON();
    it("should contain a view element", function(){
        expect(loader.type).toBe("View");
    });
});
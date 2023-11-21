import renderer from 'react-test-renderer';
import ContactInfoHead from './ContactInfoHead';

describe("ContactInfoHead", function(){
    const contactInfo = renderer.create(
            <ContactInfoHead profilePic="noContact" name="Jake" status="available" statusColor="purple"/>
    ).toJSON();
    it("should have three children", function(){
        expect(contactInfo.children.length).toBe(3);
    });
});
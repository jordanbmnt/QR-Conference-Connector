import renderer from 'react-test-renderer';
import ImageStatus from './ImageStatus';

describe("ImageStatus", function(){
    const image = renderer.create(
            <ImageStatus theme="noContact"/>
    ).toJSON();
    it("should be transparent", function(){
        expect(image.props.style.opacity).toBe(0.5);
    });
});
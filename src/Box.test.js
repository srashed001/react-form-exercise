import { render } from '@testing-library/react'
import Box from './Box'

it ("renders without crashing", function(){
    render(<Box/>)
})

it("matches snapshot", function(){
    const {asFragment} = render(<Box />)
    expect(asFragment()).toMatchSnapshot();
})

it("matches snapshot", function(){
    const {asFragment} = render(<Box />)
    expect(asFragment()).toMatchSnapshot();
})

it("creates styles according to props", function(){
    const {getByTestId} = render(<Box  color='red' width={100} height={100}/>)
    const div = getByTestId('box');
    expect(div).toHaveAttribute('style', "background-color: red; width: 100px; height: 100px;")

})
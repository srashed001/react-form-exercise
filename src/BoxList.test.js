import { render, fireEvent, getByText } from '@testing-library/react'
import BoxList from './BoxList'

it ("renders without crashing", function(){
    render(<BoxList/>)
})

it("matches snapshot", function(){
    const {asFragment} = render(<BoxList />)
    expect(asFragment()).toMatchSnapshot();
})

it("renders form in document", function(){
    const {getByTestId} = render(<BoxList />)
    const form = getByTestId('newBoxForm');
    expect(form).toBeInTheDocument();

})

it("can add new box", function(){
    const {queryByTestId, getByLabelText, queryByText} = render(<BoxList />);

    expect(queryByTestId('box')).not.toBeInTheDocument();

    const backgroundColorInput = getByLabelText('Background Color:')
    const widthInput = getByLabelText("Width:")
    const heightInput = getByLabelText("Height:")
    const btn = queryByText('Add Box')

    fireEvent.change(backgroundColorInput, {target: {value: 'red'}})
    fireEvent.change(widthInput, {target: {value: 100}})
    fireEvent.change(heightInput, {target: {value: 100}})
    fireEvent.click(btn)

    expect(queryByTestId('box'))
    .toBeInTheDocument();

})
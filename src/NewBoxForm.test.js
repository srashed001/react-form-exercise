import { render } from '@testing-library/react'
import NewBoxForm from './NewBoxForm'

it ("renders without crashing", function(){
    render(<NewBoxForm/>)
})

it("matches snapshot", function(){
    const {asFragment} = render(<NewBoxForm />)
    expect(asFragment()).toMatchSnapshot();
})

it("creates styles according to props", function(){
    const {getByPlaceholderText} = render(<NewBoxForm/>)
    const backgroundColor = getByPlaceholderText('Background Color')
    const width = getByPlaceholderText('Width')
    const height= getByPlaceholderText('Height')
    expect(backgroundColor).toBeInTheDocument()
    expect(width).toBeInTheDocument()
    expect(height).toBeInTheDocument()

})

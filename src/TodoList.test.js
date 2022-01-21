import { render, fireEvent, getByText } from '@testing-library/react'
import TodoList from './TodoList'

it ("renders without crashing", function(){
    render(<TodoList/>)
})

it("matches snapshot", function(){
    const {asFragment} = render(<TodoList />)
    expect(asFragment()).toMatchSnapshot();
})


it("renders form in document", function(){
    const {getByTestId} = render(<TodoList />)
    const form = getByTestId('newTodoForm');
    expect(form).toBeInTheDocument();

})

it("can add new todo", function(){
    const {queryByTestId, getByLabelText, queryByText} = render(<TodoList />);

    expect(queryByTestId('todo')).not.toBeInTheDocument();

    const backgroundColorInput = getByLabelText('Create Todo:')
    const btn = queryByText('Add Todo')

    fireEvent.change(backgroundColorInput, {target: {value: 'make a test'}})
    fireEvent.click(btn)

    expect(queryByTestId('todo'))
    .toBeInTheDocument();

})
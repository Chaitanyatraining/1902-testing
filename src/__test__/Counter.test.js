import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../Counter';
import renderer from 'react-test-renderer'

describe('counter', ()=> {
    it('should increment counter', () => {
        render(<Counter />)
        const counter = screen.getByTestId('counter')
        const incrementBtn = screen.getByTestId('increment')
        const decrementBtn = screen.getByTestId('decrement')
    
        fireEvent.click(incrementBtn)
    
        expect(counter).toHaveTextContent('2')
    })
})

describe('counter snapshot', ()=>{
    it('should match DOM snapshot', ()=>{
        const tree = renderer.create(<Counter />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})



// test('increment', ()=>{
//     render(<Counter />)
//     const counter = screen.getByTestId('counter')
//     const incrementBtn = screen.getByTestId('increment')
//     const decrementBtn = screen.getByTestId('decrement')

//     fireEvent.click(incrementBtn)

//     expect(counter).toHaveTextContent('2')

//     // fireEvent.click(decrementBtn)
//     // expect(counter).toHaveTextContent('0')
// })
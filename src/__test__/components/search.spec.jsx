import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import {Search} from '../../components/Search'
const defaultProps={
    user:'testName',
    setUser:jest.fn(),
    favoriteLanguage:'JavaScript',
    avatar:'www.image.com',
    isLoading:false,
    handleSubmit:jest.fn(),
    noOfRepos:10,
    error:false,

}

describe('Search Component',()=>{

    it('should display number of repos',()=>{
        render( <BrowserRouter> <Search {...defaultProps}/> </BrowserRouter>)
        expect(screen.queryByText(`Total Repo: ${defaultProps.noOfRepos}`)).toBeTruthy()
    })

    it('should display name of favorite language',()=>{
        render( <BrowserRouter> <Search {...defaultProps}/> </BrowserRouter>)
        expect(screen.queryByText(defaultProps.favoriteLanguage)).toBeTruthy()
    })

    it('should display name of the favorite language',()=>{
        render( <BrowserRouter> <Search {...defaultProps}/> </BrowserRouter>)
        expect(screen.queryByText(defaultProps.favoriteLanguage)).toBeTruthy()
    })

    it('should not display search button when isLoading is true',()=>{
        const testProps ={...defaultProps,isLoading:true}
        render( <BrowserRouter> <Search {...testProps} /> </BrowserRouter>)
        expect(screen.queryByText('Search')).toBeFalsy()
    })
    it('should display search button when isLoading is false',()=>{
        const testProps ={...defaultProps,isLoading:false}
        render( <BrowserRouter> <Search {...testProps} /> </BrowserRouter>)
        expect(screen.queryByText('Search')).toBeTruthy()
    })

    it('should display loading message when isLoading is true',()=>{
        const testProps ={...defaultProps,isLoading:true}
        render( <BrowserRouter> <Search {...testProps} /> </BrowserRouter>)
        expect(screen.queryByText(/Loading.../)).toBeTruthy()

    })

})
import React from 'react'

import Container from '../../shared/Container';
import PageTitle from '../../components/PageTitle';
import AuthNavButton from '../../components/Buttons/AuthNavButton';

class Home extends React.Component {

    render() {

        return (
            <Container>
                <div className="flex flex-col justify-center m-auto">
                    <PageTitle title={"React Chess"} />
                    <div className="w-1/2 flex flex-col justify-center mx-auto mt-10">
                        <img 
                            src="https://cdn11.bigcommerce.com/s-5p6k1/images/stencil/1000x1308/products/6146/61153/chess-set-wood-psbb375-queens-gambit-board-boxwood-pieces-view-1500x830__14824.1666212543.jpg?c=2" 
                            loading="lazy"
                            alt="Chess board"
                            className="w-max rounded"
                        />
                        <AuthNavButton text={"Login"} isPrimary={true} />
                        <AuthNavButton text={"Sign Up"} isPrimary={false}/>
                    </div>
                </div>
            </Container>
        )
    }
}

export default Home;
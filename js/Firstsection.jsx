import React from 'react';

export default class FirstSection extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="firstSection">
                <div className="firstSectionMain container">
                    <div><p>10</p><p>Oddanych Worków</p><p>Lorem ipsum lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p></div>
                    <div><p>5</p><p>Wspartych organizacji</p><p>Lorem ipsum lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p></div>
                    <div><p>7</p><p>Zorganizowanych zbiórek</p><p>Lorem ipsum lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p></div>
                </div>
            </section>
        )
    }
}
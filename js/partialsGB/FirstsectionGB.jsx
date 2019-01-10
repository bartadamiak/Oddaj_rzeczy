import React from 'react';

class FirstSectionGB extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() { 
        return (
            <>
                <section className="firstSectionGB">
                    <div className="firstSectionGBText">
                        <div className="important">ważne!</div>
                        <div className="about">{this.props.text}</div>
                    
                    
                    </div>
                </section>
            
            </>
          );
    }
}
 
export default FirstSectionGB;
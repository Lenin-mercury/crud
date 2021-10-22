import React, { Component } from 'react';

class test extends Component {

    constructor(props){
        super(props);
        this.state = {
          data: 'Jordan Belfort',
          time: '2pm closed'
        }
      }
      getData(){
        setTimeout(() => {
          console.log('Our data is fetched');
          this.setState({
            data: 'Hello WallStreet'
          })
        }, 1000)
      }

      componentDidUpdate(){
        this.getData();
      }


    render() {

        return (

            <div>

            </div>
        );
    }
}

export default test;
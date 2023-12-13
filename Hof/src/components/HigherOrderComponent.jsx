import React,{Component} from 'react'

export class HigherOrderComponent extends Component {

    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }

    DisplayItems(data) {
        const mapData = data.map(item => {
            return(
                <React.Fragment key={item.id}>
                    <li>
                        <span>Id: {item.id}  </span>
                        <span>Name: {item.name} </span>
                        <span>User Type: {item.user_type}</span>
                    </li>
                </React.Fragment>
            ) 
        })
        return mapData
    }

    FilterByUserType(data,userType) {
        const filterData = data.filter(item => item.user_type == userType)
        return this.DisplayItems(filterData)
    }

    FilterByLetter(data,letter) {
        const filterData = data.filter(item => item.name.startsWith(letter))
        return this.DisplayItems(filterData)
    }

    FilterByAge(data) {
        const filterData = data.filter(item => item.age > 28 && item.age <= 50)
        return this.DisplayItems(filterData)
    }

    calculateSumOfYearsForDesigners() {
        const designers = this.state.userData.filter(user => user.user_type === 'Designer');
        const sumOfYears = designers.map(designer => designer.years).reduce((acc, curr) => acc + curr, 0);
        return sumOfYears;
      }

    render() {
        return (
        <>
            <h1>Display All Items</h1>
            <div>
                <ul>{this.DisplayItems(this.state.userData)}</ul>
            </div>
            <h1>Display Based On User Type</h1>
            <div>
                <ul>{this.FilterByUserType(this.state.userData,"Designer")}</ul>
            </div>
            <h1>Filter All Data Starting With J</h1>
            <div>
                <ul>{this.FilterByLetter(this.state.userData,"J")}</ul>
            </div>
            <h1>Filter the data based on age greater than 28 and less than or equal to 50</h1>
            <div>
                <ul>{this.FilterByAge(this.state.userData)}</ul>
            </div>
            <h1>Find The Total Years Of The Designers</h1>
            <div>
                <p>{this.calculateSumOfYearsForDesigners()}</p>
            </div>
        </>
        )
    }

}

export default HigherOrderComponent
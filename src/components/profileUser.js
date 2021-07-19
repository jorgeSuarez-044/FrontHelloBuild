import React from "react";

class profileUser extends React.Component {
    state = {
        users: [],
        text: "Follow"
    }
    changeText = (text) => {
        this.setState({ text }); 
    }  
    componentDidMount() {
        let olddata = localStorage.getItem('formdata')
        let oldArr = JSON.parse(olddata)
        alert(olddata)
        oldArr.map(arr => 
          {
        fetch(`http://localhost:8080/api/GitRepos?userGit=${arr.name}`)
        .then(res => res.json())
        .then((data) => {
            this.setState({ users: JSON.stringify(data)})
            console.log(this.state.users)
        })
        .catch(console.log)
    }
    )
    }
    render() {
        const { text } = this.state
        return (
            <div>
                <div className="row mb-3">
                    <div className="col-md-12 text-md-center">
                        <h2 className="text-poppins font-weight-bold">List of repositories </h2>
                    </div>
                </div>
                <div className="row">
                {this.state.users}
                </div>
            </div>
        );
    }
}

export  {profileUser};
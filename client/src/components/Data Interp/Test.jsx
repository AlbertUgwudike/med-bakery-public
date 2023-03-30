import React, {Component} from "react";
//data for post
import data from "./data.json";

export default class DefaultPost extends Component {
	render() {
		return (
			<>

                <div>

                { data && data.map((postData) => {
								console.log(postData);
								return (
                                                <div> 
												{postData.title}
                                                </div>
											
								);
							})}

                </div>
			</>
		);
	}
}

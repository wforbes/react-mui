import React from 'react'
import Box from '@mui/material/Box'
import CheckboxExample from './CheckboxExample'

export default class ClassComponentsPage extends React.Component {
	constructor({props}) {
		super(props)
		this.state = {
			thingyChecked: false
		}
		this.checkTheBox = this.checkTheBox.bind(this)
	}

	checkTheBox() {
		this.setState((state) => ({ thingyChecked: !state.thingyChecked }))
	}

	render() {
		const urls = {
			reactDocs: {
				classComponents: "https://www.w3schools.com/react/react_class.asp",
				defaultProps: "https://reactjs.org/docs/react-component.html#defaultprops"
			},
			reactLibs: {
				propTypes: "https://reactjs.org/docs/typechecking-with-proptypes.html"
			},
			freeCodeCamp: {
				propTypes: "https://www.freecodecamp.org/learn/front-end-development-libraries/react/use-proptypes-to-define-the-props-you-expect"
			}
		}
		return (
			<Box
			sx={{
				bgcolor: 'background.paper',
				pl: 8,
				pr: 8,
				pb: 10
			}}
			>
				<h1 style={{ textAlign: "center" }}>Class Components</h1>
				<div className="notes">
					<p>
						As the legend goes... way back before February 2019, in order to
						modularize their code, ancient React developers had to use &nbsp;
						<a href={urls.reactDocs.classComponents} target='_blank'>
							Class-based Components
						</a>.
					</p>
					<p>
						This basically means that you can take some JSX markup, have an ES6
						Class return it from a 'render()' function, add some additional code
						to make it reusable/customizable, then import and include
						it where-ever you want elsewhere in your project.
					</p>
					<p>
						Well, what you're reading now is in a Class Component. Yes, we have achieved
						Class Component-ception.... a Class Component with Class Component content in
						it... and examples of Class Components within the content about Class Components.
					</p>
					<h3 style={{ textAlign: "center" }}>Class Component State</h3>
					<p>
						Class Components uses a different pattern from that 'useState' hook mumbo-jumbo
						more recently released. Let's give it a try..
					</p>
					<p>
						Below, I've got a thingy here that reads and updates the state in
						this Class Component.
					</p>
				</div>
				<hr />
				<div className='thingy'>
					<label>
						<input
							type='checkbox' 
							checked={this.state.thingyChecked}
							onChange={() => this.checkTheBox()}
						/>
						thingy
					</label>
					<p>thingy is: <strong>{this.state.thingyChecked.toString()}</strong></p>
				</div>
				<hr />
				<div className="notes">
					<p>
						For the sake of not having to bend over backward to show the code here
						in the UI, just go look at the code repo if you care. I'll circle back
						one day and put some fancy awesome formatted example code here.
					</p>
					<h3 style={{ textAlign: "center" }}>Reusable Class Components</h3>
					<p>
						Alright, next step is to break this checkbox thingy into it's own Class
						Component and make it all customizable..
					</p>
					<p>
						So here's a 'CheckboxExample' component with no prop values set on it.
					</p>
					<hr />
					<CheckboxExample />
					<code>
						&lt;CheckboxExample /&gt;
					</code>
					<hr />
					<h4 style={{ textAlign: "center" }}>defaultProps</h4>
					<p>It's totally unstyled and the labels/text are given some defaults.
						That's done with the <a href={urls.reactDocs.defaultProps} target='_blank'>
							defaultProps
						</a> React Class Property.
					</p>
					<p>
						And here's that same 'CheckboxExample' component a couple times with
						different props for customization. 
					</p>
					<p>
						The props include:
					</p>
					<ul>
						<li>a style object to set the container with a different look</li>
						<li>a boolean to set whether it begins as checked or not</li>
						<li>a string to set the label text</li>
						<li>a string to set the status output text</li>
						<li>a boolean to set the status value bold or not</li>
					</ul>
					<hr />
					<CheckboxExample 
						style={{
							backgroundColor: '#aaa',
							border: "0.2em solid blue",
							borderRadius: "0.4em",
							maxWidth: "20%",
							margin: "0 auto",
							padding: "1em"
					  }}
						initialChecked={true}
						labelText="Done"
						statusText="Completion: "
						strongStatus={true}
					/>
					<code>
						&lt;CheckboxExample<br />
						&nbsp;&nbsp;style=&#123;&#123;<br />
						&nbsp;&nbsp;&nbsp;&nbsp;backgroundColor: "#aaa",<br />
						&nbsp;&nbsp;&nbsp;&nbsp;border: "0.5em solid blue",<br />
						&nbsp;&nbsp;&nbsp;&nbsp;borderRadius: "0.4em",<br />
						&nbsp;&nbsp;&nbsp;&nbsp;maxWidth: "20%",<br />
						&nbsp;&nbsp;&nbsp;&nbsp;margin: "0 auto",<br />
						&nbsp;&nbsp;&nbsp;&nbsp;padding: "1em"<br />
						&nbsp;&nbsp;&#125;&#125;<br />
						&nbsp;&nbsp;initialChecked=&#123;true&125;<br />
						&nbsp;&nbsp;labelText='Done'<br />
						&nbsp;&nbsp;statusText='Completion: '<br />
						&nbsp;&nbsp;strongStatus=&#123;true&#125;<br />
						/&gt;
					</code>
					<hr />
					<CheckboxExample 
						style={{
							textAlign: "right",
							backgroundColor: "tan",
							border: "0.5em solid burlywood",
							borderRadius: "5.2em",
							maxWidth: "40%",
							margin: "0 auto",
							padding: "2em"
					  }}
						initialChecked={false}
						labelText="Potato"
						statusText="Potato-ness: "
						strongStatus={false}
					/>
					<code>
						&lt;CheckboxExample<br />
						&nbsp;&nbsp;style=&#123;&#123;<br />
						&nbsp;&nbsp;&nbsp;&nbsp;textAlign: "right",<br />
						&nbsp;&nbsp;&nbsp;&nbsp;backgroundColor: "tan",<br />
						&nbsp;&nbsp;&nbsp;&nbsp;border: "0.5em solid burlywood",<br />
						&nbsp;&nbsp;&nbsp;&nbsp;borderRadius: "5.2em",<br />
						&nbsp;&nbsp;&nbsp;&nbsp;maxWidth: "40%",<br />
						&nbsp;&nbsp;&nbsp;&nbsp;margin: "0 auto",<br />
						&nbsp;&nbsp;&nbsp;&nbsp;padding: "2em"<br />
						&nbsp;&nbsp;&#125;&#125;<br />
						&nbsp;&nbsp;initialChecked=&#123;false&125;<br />
						&nbsp;&nbsp;labelText='Potato'<br />
						&nbsp;&nbsp;statusText='Potato-ness: '<br />
						&nbsp;&nbsp;strongStatus=&#123;false&#125;<br />
						/&gt;
					</code>
					<hr />
					<p>
						These props probably don't make a ton of real-world sense,
						like I'd probably want to be able to customize the style each element in
						the component, but I probably wouldn't have a real-world use for this exact
						component anyway... we're just learnin' here.
					</p>
					<h4 style={{ textAlign: "center" }}>prop-types</h4>
					<p>
						Although now with TypeScript it may be vestigal, there's a way to provide
						type checking for the props being passed to a component. That's done
						with <a href={urls.reactLibs.propTypes} target='_blank'>
							npm: prop-types
						</a> that I just saw mentioned in <a href={urls.freeCodeCamp.propTypes} target='_blank'>
							this FreeCodeCamp exercise
						</a>. So, I added that to this CheckboxExample component.
					</p>
					<code>
						CheckboxExample.propTypes = &#123;<br/>
						&nbsp;&nbsp;style: PropTypes.object.isRequired,<br/>
						&nbsp;&nbsp;initialChecked: PropTypes.bool.isRequired,<br />
						&nbsp;&nbsp;labelText: PropTypes.string.isRequired,<br />
						&nbsp;&nbsp;statusText: PropTypes.string.isRequired,<br />
						&nbsp;&nbsp;strongStatus: PropTypes.bool.isRequired<br />
						&#125;
					</code>
					<h4 style={{ textAlign: "center" }}>Using previous state</h4>
					<p>
						Something important to note is that React may batch state change requests
						asynchronously, aka simultaneously, so you can't depend on 'this.state'
						properties to be accurate. Instead, when calling 'setState()' you can pass
						it an arrow function where the first parameter is the accurate 'state'
						object and the second parameter is the 'props' object. 
					</p>
					<p>
						So, this:
					</p>
					<code>
						this.setState(&#123; something: this.state.something + 1 &#125;)
					</code>
					<p>can instead be:</p>
					<code>
						this.setState((state) =&gt; (&#123; something: state.something + 1 &#125;))
					</code>
				</div>
			</Box>
		)
	}
}
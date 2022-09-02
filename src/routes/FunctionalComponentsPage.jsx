import Box from '@mui/material/Box'

const StatelessFuncComp = (props) => {
	return (
		<ul>
			<li>This is a</li>
			<li>stateless functional component</li>
			{props.potato ? (<li>
				with a prop
			</li>) : (<li>
				without a prop
			</li>)}
		</ul>
	)
}

export default function FunctionalComponentsPage(props) {
	const urls = props.urls
	return (
		<Box
			sx={{
				bgcolor: 'background.paper',
				pl: 8,
				pr: 8,
				pb: 10
			}}
		>
			<h3 style={{ textAlign: "center" }}>Functional Components</h3>
			<div className="notes">
				<p>
					As of React version 16.8.0 (Feb 2019), we can now use Functional
					Components as the go-to solution for writing components. The people
					rejoiced over this because this type of component requires fewer lines
					of code to end up getting more done. There doesn't appear to be any
					recommendations to use Class-based components anymore.
				</p>
				<p>
					This shift in practices is due mainly to the introduction of Hooks.
					With it came the 'useState' hook, which allows adding state to a
					functional component. First I'll make a stateless functional component
					without the useState hook, then we can see what using the hook in a
					functional component is like.
				</p>
			</div>
			<h4 style={{ textAlign: "center" }}>Stateless Functional Components</h4>
			<div className="notes">
				<p>
					First, it seems like the most simple functional component is a
					stateless one that simply returns some JSX and may utilize
					props passed to it to alter its output. Props are 'passed down'
					in React, so generally data flows one way - from the parent component
					down to the child component.
				</p>
				<p>
					Here's a simple stateless functional component without and with
					a prop value passed to it:
				</p>
				<hr />
				Stateless Functional Component definition:
				<br />
				<code>
					const StatelessFuncComp = (props) =&gt; &#123;<br />
					&nbsp;&nbsp;return (<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&gt;<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;This is a&lt;/li&gt;<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;stateless functional component&lt;/li&gt;<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;props.potato ? (&lt;li&gt;<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;with a prop<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/li&gt;) : (&lt;li&gt;<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;without a prop<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/li&gt;)&#125;<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;<br />
					&nbsp;&nbsp;)<br />
					&#125;
				</code>
				<hr />
				<p>
					Then on the parent component, it just needs to be included in the markup like this:
				</p>
				<code>
					&lt;StatelessFuncComp /&gt;<br />
				</code>

				<p>The result would be this:</p>
				<StatelessFuncComp />
				<hr />
				<p>Or included with a prop:</p>
				<code>
					&lt;StatelessFuncComp potato=&#123;true&#125; /&gt;<br />
				</code>
				<p>The result would be this:</p>
				<StatelessFuncComp potato={true} />
				<hr />
			</div>
			<h4 style={{ textAlign: "center" }}>Functional Component State with useState hook</h4>
			<div className="notes">
				<p>
					So the story I'm reading here is that prior to React version 16.8, if you needed to
					encapsulate state in your component - it had to be a Class-based component. Functional
					components were generally stateless.
				</p>
				<p>
					Fortunately, we now have Hooks which provide a few new features available to use in
					functional components. The one we're concerned with here is 'useState' and this is
					how it can be used.
				</p>
				<p>
					First, import it at the top of the file, destructured from the react library.
				</p>
				<code>
					import &#123; useState &#125; from 'react'
				</code>
				<p>
					Then, in your functional component, call useState like a function, passing it a starting
					value as an argument. The result of that function call will be an array with two indexes.
					We destructure these to have access to them, naming them whatever we want. Here I'm naming
					them 'count' and 'setCount'.
				</p>
				<code>const [ count, setCount ] = useState(0)</code>
				<p>
					The first index will be the state variable. That's the variable that holds the value to
					be kept in state. Again, it could be named anything we want - in this example it's named
					'count'.
				</p>
				<p>
					The second index will be a function that can be used to change the state variable's value.
					When we call it, that function accepts an arrow function as an
					argument that defines how to change the state variable. The arrow function passed to it
					will have one parameter - which will have the value of the state variable (count). In the
					function we do whatever's needed to change it and return the new value. Once again, it
					could be named anything we want - in this example it's named 'setCount'.
				</p>
				<p>
					Here's a couple examples of using the 'setCount' state function. We take the state variable and
					iterate it by one and return the result
				</p>
				<code>
					setCount((count) =&gt; count + 1)
				</code>
				<p>
					Or more verbose:
				</p>
				<code>
					setCount((count) =&gt; &#123;<br/>
					&nbsp;&nbsp;let newValue = count + 1<br/>
					&nbsp;&nbsp;return newValue<br/>
					&#125;)
				</code>
				<h4>...todo: example of functional component with useState</h4>
			</div>
		</Box>
	)
}
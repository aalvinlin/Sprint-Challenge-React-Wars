# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

   React JS is a framework for easily adding and removing UI components. React allows one to develop modular code that can be developed and maintained separately without. In class, we examined components in detail and learned how they could be styled using Reactstrap and styled components. By keeping CSS and HTML code within separate component pages, it makes it possible to insert a component and have all the structure and style already included, without having to edit several different files across multiple directories.

   From personal research, I have found that React allows greater separation of responsibilities within a team; a front-end developer could safely use buttons or carousels created by another developer and know that the component will work perfectly (once it is imported correctly).

1. What does it mean to think in react?

    To think in React is to be able to visualize and describe parts of a web page as components. Doing so entails thinking about which parts are similar and which ones are different. For example, buttons could all be one component, whether they are used for navigation or form submission. Containers could be another component, so that each post on a social media feed would have its own component.

    Thinking in components helps produce DRY code so that each portion of the web page is compartmentalized.

1. Describe state.

    State refers to the current status of an application. Variables may change over time, so it is important to store these variables and also inform the application of any updates to these variables, whethere they are created, deleted, or modified. Only by maintaining state can multiple functions and components work on the correct version of the variable at any given time.

1. Describe props.

    Props refers to the parameter of a child component. Information is passed from a parent component to a child component via attributes in a component tag. These attributes are then consolidated into an object that the child has access to. For example, if the parent passes the following attributes "height=5, weight=180", the child has access to "props.height" and "props.weight" when props is defined as a parameter within the child component.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

    Side effects are any pieces of code that happens outside of a component. In order to sync effects so that they occur at the right time, the useEffect() method allows one to set when code should be run, and at what time.
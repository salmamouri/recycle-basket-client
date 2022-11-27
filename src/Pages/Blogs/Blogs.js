import React from 'react'

export default function Blogs() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-16'>
      <div className=" m-16  items-center text-center p-5 border border-xl">
    <h3 className='text-3xl my-4 text-secondary '>What are the different ways to manage a state in a React application?</h3>
    <p className='text-xl font semibold'>In React ,there are at least seven ways to handle the state.React Router is a great tool to handle routes and manage the params.The subsequent choice is to store the state in the program through web capacity. This is helpful when we need to persevere state among reloads and reboots. Models incorporate treats, nearby capacity, and IndexedDB. These are local program innovations.Information endured in the program is attached to a solitary program. In this way, in the event that the client stacks the site in an alternate program, the information won't be accessible.The third option is to use store state locally. It is useful when one component needs the state.The Fourth option is to define the state in the parent component. Often, the same state is used across multiple components. In those cases, it is useful to lift the state to a common parent. The lifting state is a two‑step process. First, we declare the state in a common parent component, and then we pass the state down to child components via props. This pattern should be considered any time a few related components need to use the same state. The lifting state avoids duplicating states in multiple components. It helps to assure that our components all consistently reflect the same state. </p>

      </div>
      <div className=" m-16  items-center text-center p-5 border border-xl">
        <h3 className='text-3xl my-4 text-secondary '>How does prototypical inheritance work?</h3>
        <p className='text-xl font semibold'>When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.
        The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype. Note: The property of an object that points to its prototype is not called prototype .In JavaScript, objects inherit properties from other objects — the prototypes. That's the idea of prototypal inheritance.JavaScript looks for inherited properties in the prototype of the object, but also in the prototype of the prototype, and so on in the chain of prototypes.</p>
      </div>
      <div className=" m-16  items-center text-center p-5 border border-xl">
        <h3 className='text-3xl my-4 text-secondary '>What is a unit test? Why should we write unit tests?</h3>
        <p className='text-xl font semibold'>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
        Unit testing is a component of test-driven development (TDD), a pragmatic methodology that takes a meticulous approach to building a product by means of continual testing and revision. This testing method is also the first level of software testing, which is performed before other testing methods such as integration testing. Unit tests are typically isolated to ensure a unit does not rely on any external code or functions. Testing can be done manually but is often automated.A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.Test-driven development requires that developers first write failing unit tests. Then they write code and refactor the application until the test passes. TDD typically results in an explicit and predictable code base.</p>
      </div>
      <div className=" m-16  items-center text-center p-5 border border-xl">
        <h3 className='text-3xl my-4 text-secondary '>React vs. Angular vs. Vue?</h3>
        <p className='text-xl font semibold'>There are three systems for building web applications that each frontend designer has found out about: Respond, Vue.js, and Rakish.
        Respond is a UI library, Precise is a completely fledged front-end structure, while Vue.js is a dynamic system.
        They can be utilized reciprocally to fabricate front-end applications, yet they're not 100% the equivalent, so it's a good idea to look at them and figure out their disparities.

        React can be utilized as a UI library to deliver components, without implementing a particular venture construction, and that is the reason it's not stringently a structure.React Components are the littlest structure blocks of Respond applications. They are more impressive than DOM components on the grounds that the Respond DOM makes a point to refresh them proficiently at whatever point something changes.Parts are bigger structure hinders that characterize free and reusable parts of be utilized all through the application. They acknowledge inputs called props and produce components that are then shown to the client.
        The Vue.js center library centers around the View layer as it were. It's known as a dynamic system since you can broaden its usefulness with official and outsider bundles, like Vue Switch or Vuex, to transform it into a real structure.In spite of the fact that Vue isn't completely connected with the MVVM design, its plan was mostly motivated by it. With Vue, you'll be working generally on the ViewModel layer, to ensure that the application information is handled in a manner that permits the structure to deliver an exceptional View.
        AngularJS, the first system, is a MVC structure. However, in Rakish 2, there's no severe relationship with MV*-designs as it is additionally part based.Projects in Precise are organized into Modules, Parts, and Administrations. Each Rakish application has no less than one root part and one root module.Every part in Precise contains a Format, a Class that characterizes the application rationale, and MetaData (Decorators). The metadata for a part advises Precise where to find the structure impedes that it needs to make and present its view.Precise formats are written in HTML however can likewise incorporate Rakish layout grammar with unique orders to yield receptive information and render numerous components, in addition to other things.

.
       </p>
      </div>
      
    </div>
  )
}

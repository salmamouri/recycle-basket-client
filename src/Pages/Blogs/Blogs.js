import React from 'react'

export default function Blogs() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-16'>
      <div className="items-center text-center p-5 border border-xl">
    <h3 className='text-3xl my-4'>What are the different ways to manage a state in a React application?</h3>
    <p className=''>In React ,there are at least seven ways to handle the state.React Router is a great tool to handle routes and manage the params.The subsequent choice is to store the state in the program through web capacity. This is helpful when we need to persevere state among reloads and reboots. Models incorporate treats, nearby capacity, and IndexedDB. These are local program innovations.Information endured in the program is attached to a solitary program. In this way, in the event that the client stacks the site in an alternate program, the information won't be accessible.The third option is to use store state locally. It is useful when one component needs the state.The Fourth option is to define the state in the parent component. Often, the same state is used across multiple components. In those cases, it is useful to lift the state to a common parent. The lifting state is a two‑step process. First, we declare the state in a common parent component, and then we pass the state down to child components via props. This pattern should be considered any time a few related components need to use the same state. The lifting state avoids duplicating states in multiple components. It helps to assure that our components all consistently reflect the same state. </p>

      </div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
    </div>
  )
}

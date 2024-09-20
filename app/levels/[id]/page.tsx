"use client";

import React from "react";
import Editor from "./_components/Editor";

const page = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-full h-full p-6 mr-[450px]">
        <Editor />
      </div>
      <Sidebar />
    </div>
  );
};

// add links and references to each step (kind of like roadmap.sh)

const Sidebar = () => {
  return (
    <div className="fixed top-0 right-0 bg-gray-800 max-w-[450px] w-full h-full p-6 overflow-y-auto">
      <h3 className="text-white font-semibold text-4xl">Level 1</h3>
      <h3 className="text-gray-500 font-normal text-2xl">Basic Counter Dapp</h3>
      <div className="flex flex-col gap-y-10 mt-6">
        <div className="text-white">
          <p className="text-white/90">
            Congratulations on starting your journey into smart contract development! This
            is Level 1, and we're excited to have you. By the end of this level, you'll be
            able to build rudimentary contracts on your own. Let's dive in!
          </p>
        </div>

        <div>
          <small className="uppercase font-bold text-orange-400">intro</small>
          <p className="text-white/80">
            So the idea of this smart contract is to create a counter application but
            decentralised meaning the actual value will be stored on-chain. Excited?
          </p>
        </div>

        <div>
          <small className="uppercase font-bold text-orange-400">Step 1</small>
          <p className="text-white/90">
            For a bare-bones smart contract, all you need is an account (the state that
            holds all your values) and functions (that perform mutations on the state). To
            give you an analogy, an architect has a blueprint for a project and they use
            the blueprint to make replica projects. In a similar way, this contract is
            your blueprint and you can have multiple instances of it, each having
            different values.
          </p>
        </div>

        <div>
          <small className="uppercase font-bold text-orange-400">Step 2</small>
          <p className="text-white/90">
            In the editor, ignore everything and focus on the bottom-most snippet of code.
            That is your account. As you can see, it holds the state of the contract
            which, in this case, is the counter value.
          </p>
        </div>

        <div>
          <small className="uppercase font-bold text-orange-400">Step 3</small>
          <p className="text-white/90">
            Now, go directly to the place where functions are defined (we will come to
            derived accounts soon). As you can see, the first function is an
            initialisation function which, as the name suggests, initializes an account.
            Similarly, there is an increment function which would increment the counter
            each time it is called. But let's just focus on the intilise function.
          </p>
        </div>

        <div>
          <small className="uppercase font-bold text-orange-400">Step 4</small>
          <p className="text-white/90">
            As you might have noticed, the first argument in this function is the Context.
            This is something all the functions expect in their first argument. This
            context allows the function to access the data in the account (which is
            defined below). This context has access to a very special variable, namely,
            accounts which you have might have guessed gives access to our account object.
            Then we print out a message and return the function successfully.
          </p>
        </div>

        <div>
          <small className="uppercase font-bold text-orange-400">Step 5</small>
          <p className="text-white/90">
            Now the question is, where is this context coming from? If you notice, Context
            has something attached to it: Initialize. If you scroll below and go to the
            defined accounts section, you can see it is defined as a struct. Oof! There a
            lot of things going on in here, let's break it down one by one.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;

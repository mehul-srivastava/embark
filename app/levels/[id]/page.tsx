import React from "react";
import Editor from "./_components/Editor";

export const generateStaticParams = () => {
  return ["1"];
};

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
    <div
      className="fixed top-0 right-0 bg-gray-800 max-w-[450px] w-full h-full p-6 overflow-y-auto"
      id="sidebar"
    >
      <h3 className="text-white font-semibold text-4xl">Level 1</h3>
      <h3 className="text-gray-500 font-normal text-2xl">Basic Counter Dapp</h3>
      <div className="flex flex-col gap-y-12 mt-6">
        <div className="text-white">
          <p className="text-white/90">
            Congratulations on starting your journey into smart contract development! This
            is Level 1, and we&apos;re excited to have you. By the end of this level,
            you&apos;ll be able to build rudimentary contracts on your own. Let&apos;s
            dive in!
          </p>
        </div>

        <div>
          <small className="uppercase font-bold text-orange-400">intro</small>
          <p className="text-white/90">
            So the idea of this smart contract is to create a counter application but
            decentralised meaning the actual value will be stored on-chain. Excited?
          </p>
        </div>

        <div>
          <small className="uppercase font-bold text-orange-400">Step 1</small>
          <p className="text-white/90">
            For any smart contract, you need two key components: an account (the state
            that holds all the values) and functions (that perform mutations on the
            state).
            <br />
            <br />
            To use an analogy, an architect has a blueprint for a project and they use the
            blueprint to create multiple replicas. In a similar way, the account defined
            in the contract acts as a blueprint, allowing you to create multiple
            instances, each with different values.
          </p>
        </div>

        <div>
          <small className="uppercase font-bold text-orange-400">Step 2</small>
          <p className="text-white/90">
            In the editor, focus on the bottom-most snippet of code. That&apos;s the
            &quot;account&quot; we&apos;ve been discussing, which is nothing but a
            structure. As you can see, it defines the data that your contract account will
            hold. In this case, the counter value.
          </p>
        </div>

        <div>
          <small className="uppercase font-bold text-orange-400">Step 3</small>
          <p className="text-white/90">
            Now, let&apos;s look at the top of the code, where the <kbd>initialise</kbd>{" "}
            and <kbd>update</kbd> functions are defined (we&apos;ll discuss derived
            accounts shortly).
            <br />
            <br />
            The first function is the initialization function, which, as the name
            suggests, initializes an account.
            <br />
            <br />
            The second function, update, increments the counter each time it is called.
            For now, let&apos;s focus on the initialise function.
          </p>
        </div>

        <div>
          <small className="uppercase font-bold text-orange-400">Step 4</small>
          <p className="text-white/90">
            As you may have noticed, the first argument in this function is the Context
            variable. The <kbd>{`ctx`}</kbd> parameter includes all the accounts and
            program state necessary for the instruction to execute correctly. This context
            provides access to a special property called <kbd>accounts</kbd>, which, as
            you might have guessed, gives access to the account object.
          </p>
        </div>

        <div>
          <small className="uppercase font-bold text-orange-400">Step 5</small>
          <p className="text-white/90">
            Another thing to be noted here is that the context argument is being passed an{" "}
            <kbd>Initialise</kbd> variable. Now this is used to enable type-checking so
            that you only access the data defined in our account. This{" "}
            <kbd>Initialise</kbd> variable is coming from our derived accounts! Let&apos;s
            explore that!
          </p>
        </div>

        <div>
          <small className="uppercase font-bold text-orange-400">Step 6</small>
          <p className="text-white/90">
            If you scroll down to the derived accounts snippet, you can very well see the
            Initialise struct (structure or blueprint). Now, let&apos;s break each
            component one by one.
          </p>
          <ol className="text-white/90 mt-2">
            <li className="list-disc ml-4 mt-2">
              <kbd>{`pub struct Initialize<'info>`}</kbd>: This declares a blueprint named
              Initialize, which has a lifetime parameter <kbd>&apos;info</kbd> (a rust
              concept you can ignore for now). This is often used in Solana programs to
              ensure the references are valid for the duration needed.
            </li>
            <li className="list-disc ml-4 mt-2">
              <kbd>{`#[account(mut)]`}</kbd>: This attribute indicates that the account is
              mutable meaning it is possible to change the data associated with the
              account when the function is called.
            </li>
            <li className="list-disc ml-4 mt-2">
              <kbd>{`pub user: Signer<'info>`}</kbd>: This field represents the account of
              the user initiating the transaction from their wallet when interacting with
              our application. The Signer type ensures that this account has signed the
              transaction.
            </li>
            <li className="list-disc ml-4 mt-2">
              <kbd>{`#[account(init, payer = user, space = 8 + CounterAccount::INIT_SPACE)]`}</kbd>
              : This attribute indicates that the counter_account is being initialized.{" "}
              <kbd>init</kbd> means a new account will be created. <kbd>payer = user</kbd>{" "}
              specifies that the user who signed the transaction will pay for the account
              creation. <kbd>space = 8 + CounterAccount::INIT_SPACE</kbd> is something
              important as it defines the space allocated for the new account, where 8
              bytes are usually for storing the account&apos;s metadata (like its
              discriminator) and CounterAccount::INIT_SPACE is a constant that
              automatically allocates space required by our account CounterAccount
              blueprint.
            </li>
            <li className="list-disc ml-4 mt-2">
              <kbd>{`pub counter_account: Account<'info, CounterAccount>`}</kbd>: This
              field represents the new account being initialized, which will hold data of
              type CounterAccount as we defined in the contract at the bottom.
            </li>
            <li className="list-disc ml-4 mt-2">
              <kbd>{`pub system_program: Program<'info, System>`}</kbd>: This field
              represents the system program, which is a built-in Solana program
              responsible for account creation and other low-level operations we
              don&apos;t need to worry about.
            </li>
          </ol>
        </div>

        <div>
          <small className="uppercase font-bold text-orange-400">REST TIME</small>
          <p className="text-white/90">
            Whoa! That was a lot to take in. Take a breather, and feel free to come back
            to it when you&apos;re ready.
          </p>
        </div>

        <div>
          <small className="uppercase font-bold text-orange-400">Step 7</small>
          <p className="text-white/90">
            Alright, let&apos;s wrap things up for the initialise function. In the first
            line, we initialize the account, followed by printing a message that includes
            the count data associated with the account. In this case, would be zero.
          </p>
        </div>

        <div>
          <small className="uppercase font-bold text-orange-400">Step 8</small>
          <p className="text-white/90">
            Now, let&apos;s move on to the update function. This time, we are accessing
            the <kbd>counter_account</kbd> instead of initializing it. Rust knows
            we&apos;re here to modify the account because, if you look back at the{" "}
            <kbd>Initialise</kbd> and <kbd>Update</kbd>
            derived accounts, you&apos;ll notice that one uses <kbd>init</kbd> for the
            account while the other uses <kbd>mut</kbd>. This distinction allows Rust to
            understand whether we are initializing or mutating an object.
          </p>
        </div>

        <div>
          <small className="uppercase font-bold text-orange-400">Step 8</small>
          <p className="text-white/90">
            In the second line, we are simply incrementing the count by one. Although this
            is a fairly risky way, as there&apos;s a possibility that the count is at the{" "}
            <kbd>MAX VALUE</kbd>, in which case this will throw an error. But for the sake
            of simplicity, we can use this snippet. After incrementing, we print a message
            displaying the updated count!
          </p>
        </div>

        <div>
          <small className="uppercase font-bold text-orange-400">Step 9</small>
          <p className="text-white/90">
            Some axuillary yet important stuff includes the name of your smart contract
            which is <kbd>counter_contract</kbd> defined in the 4th line. <kbd>mod</kbd>{" "}
            keyword stands for modules which means from Rust&apos;s perspective you are
            just creating modules.
            <br />
            <br />
            Additionally, note the <kbd>declare_id</kbd> macro (which differs slightly
            from functions) provided by Anchor. It is used to define the program&apos;s
            public key. The public key is crucial because it uniquely identifies your
            Solana program on the blockchain.
          </p>
        </div>

        <div>
          <small className="uppercase font-bold text-orange-400">THE END.</small>
          <p className="text-white/90">
            And voila! You can now call yourself a beginner smart contract developer 😄.
            However, this was just the tip of the iceberg and there are much more complex
            things you can build with a smart contract, which we will expore in the
            upcoming levels.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;

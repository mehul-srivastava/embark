import React, { useLayoutEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/stackoverflow-dark.css"; // tokyo-night-dark.css
import { useRecoilValue } from "recoil";
import { codeAtom } from "@/store/atoms";

const Editor = () => {
  useLayoutEffect(() => hljs.highlightAll());
  hljs.registerLanguage("rust", require("highlight.js/lib/languages/rust"));

  // const code = useRecoilValue(codeAtom)

  const code = `use anchor_lang::prelude::*;
declare_id!("PUBLIC_KEY_HERE");

#[program]
pub mod counter_contract {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> { 
        let account = &ctx.accounts.counter_account;

        msg!("Counter account has been initialised! Current count: {}", account.count);
        Ok(())
    }

    pub fn update(ctx: Context<Update>, count: u64) -> Result<()> {
        let account = &mut ctx.accounts.counter_account;

        account.count = counter.count + 1;

        msg!("Counter has been updated! Current count: {}", account.count);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(mut)]
    pub user: Signer<'info>,

    #[account(
        init,
        payer = user,
        space = 8 + CounterAccount::INIT_SPACE)
    )]
    pub counter_account: Account<'info, CounterAccount>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Update<'info> {
    #[account(mut)]
    pub counter_account: Account<'info, CounterAccount>,
}

#[account]
pub struct CounterAccount {
    count: u64,
}`;

  return (
    <div>
      <div className="flex items-center gap-x-4">
        <h4 className="text-white rounded-full bg-gray-800 w-fit p-2 px-8 mb-4 cursor-pointer">
          Rust <small>(Anchor)</small>
        </h4>
      </div>
      <div className="bg-[#1c1b1b] h-full border border-gray-500 rounded-md max-w-[calc(100vw-450px-48px)]">
        <pre className="h-[calc(100vh-56px-24px-24px)] w-full">
          <code className="rounded-md h-full">{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default Editor;

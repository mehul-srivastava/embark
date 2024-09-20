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
declare_id!("PUBLIC_KEY_WILL_BE_GENERATED_LATER");

#[program]
pub mod nfts_page {
    use super::*;

    pub fn initialize_page(ctx: Context<Initialize>, title: String, description: String, price: f32, nft_count: u32, image: String) -> Result<()> { 
        let account = &mut ctx.accounts.page_account;

        account.title = title;
        account.description = description;
        account.price = price;
        account.nft_count = nft_count;
        account.image = image;

        msg!("Payment page created for reward type - nfts!");
        Ok(())
    }

    pub fn update_page(ctx: Context<Update>, title: String, description: String, price: f32, nft_count: u32, image: String) -> Result<()> {
        let account = &mut ctx.accounts.page_account;

        account.title = title;
        account.description = description;
        account.nft_count = nft_count;
        account.price = price;
        account.image = image;


        msg!("Payment page updated!");
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
        space = 8 + 100 + 500 + 50 + 100 + 200
    )]
    pub page_account: Account<'info, NftsPage>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Update<'info> {
    #[account(mut)]
    pub page_account: Account<'info, NftsPage>,
}

#[account]
pub struct NftsPage {
    title: String,
    description: String,
    price: f32,
    nft_count: u32,
    image: String,
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

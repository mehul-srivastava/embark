import { atom } from "recoil";

export const codeAtom = atom({
  key: "code-atom",
  default: `
use anchor_lang::prelude::*;
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
}
    `.trim(),
});

#![no_std]
use soroban_sdk::{contract, contractimpl, Env, U256};
use zk_soroban::ZkEnv;

#[contract]
pub struct Verifier;

#[contractimpl]
impl Verifier {
    /// Validates if a public input is safe for a ZK circuit.
    pub fn verify_input(env: Env, input: U256) -> bool {
        // Using the trait we added to Env for clean syntax
        env.is_bn254_scalar(input)
    }
}

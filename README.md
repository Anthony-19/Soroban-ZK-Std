# Soroban-ZK-Std
**A High-Performance Cryptographic Standard Library for Stellar Protocol 25 ZK-Primitives.**

## The Unsolved Problem in Stellar ZK
While Protocol 25 ("X-Ray") introduced native host functions for BN254 pairing checks and Poseidon hashing, a massive **Developer Experience (DX)** gap remains. To build a private stablecoin or compliant RWA protocol on Stellar today, developers face three "Hard Stops":

1. **Host-Guest Mapping**: Manually handling the conversion between Soroban’s host-managed U256 and internal 256-bit field representations is error-prone.

2. **Resource Exhaustion**: Standard Rust ZK libraries are too heavy for Soroban’s 64KB WASM limit.

3. **Gas Inefficiency**: Software-only math often exceeds the 400M instruction limit.

**Soroban-ZK-Std** is the solution—a modular, no_std Rust SDK designed to make Stellar the premier home for configurable, compliance-forward privacy.


## Mathematical Specification
- **Curve**: BN254 (alt_bn128) optimized for the native bn254_multi_pairing_check host function.
- **Field Modulus ($r$)**: 21888242871839275222246405745257275088548364400416034343698204186575808495617
- **Primitives**: Constant-time modular addition, custom Schoolbook Multiplication with 512-bit reduction, and Fermat-based inversion.

## Performance Benchmarks (March 2026)
- **47% Faster Hashing**: Directly utilizes the poseidon2_permutation host function via CAP-0075.
- **Minimal Footprint**: Uses ethnum for assembly-optimized arithmetic, reducing WASM binary size by ~22KB—saving 30% of your total contract space.
- **Instruction Efficiency**: Optimized field arithmetic allows for complex verifiers to run well within the 400M instruction budget.

## Public Good Impact & Use Cases
This is foundational infrastructure for the Stellar ecosystem. It empowers developers to build:
- **Shielded RWA Transfers**: Private tokenized assets that maintain regulatory visibility.
- **Configurable Privacy**: Selective disclosure for institutional payments.
- **Trustless Governance**: ZK-Voting and anonymous contribution tracking for Stellar-native DAOs.

## Installation
Add this to your `Cargo.toml`:
```toml
[dependencies]
zk-soroban = { git = "[https://github.com/georgegoldman/Soroban-ZK-Std](https://github.com/georgegoldman/Soroban-ZK-Std)" }
```

# Citadel Recovery

A tool for converting BIP39 mnemonic phrases to addresses and private keys for Hedera.

## Current Support

> **Note:** At the moment, this tool only supports **ECDSA** (secp256k1) key derivation.  
> Support for **ED25519** is **not yet implemented**.  
> Future release may allow switching between key types.

## Standalone offline version

Download `bip39-standalone.html` from
[the releases](https://github.com/iancoleman/bip39/releases).

Open the file in a browser by double clicking it.

This can be compiled from source using the command `python compile.py`

## Usage

Enter your BIP39 phrase into the 'BIP39 Phrase' field, or press
'Generate Random Phrase'

If required, set the derivation path, although the defaults are quite usable.

Go to the "Coin" dropdown and select HBAR - Hedera to ensure the correct derivation settings are applied.

See the table for a list of addresses generated from the phrase.

Toggle columns to blank to easily copy/paste a single column of data, eg to
import private keys into a wallet or supply someone with a list of addresses.

# License

This BIP39 tool is released under the terms of the MIT license. See LICENSE for
more information or see https://opensource.org/licenses/MIT.

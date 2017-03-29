#!/usr/bin/env node

const { exec } = require('child_process');
const meow = require('meow');
const schmanslate = require('schmanslate');

const cli = meow(`
	ENSURE YOU HAVE YOUR SOUND ON!

	Usage
		$ schmay [input]

	Options
		-t Translate to GO abbreviation

	Examples
		$ schmay Hello there my friend!
		$ schmay Hello -t
`);

let output = cli.input.join(' ');
if (cli.flags.t) {
  output = schmanslate(output);
}
exec(`say -v Yuri '${output}'`);

export enum COMMANDS {
	SAY = 0,
	NRP = 1,
	ME = 2,
	DO = 3,
	TRY = 4,
	TODO = 5,
	SCREAM = 6,
	WHISPER = 7,
	FACTION = 8,
	FACTION_NRP = 9,
	ORG = 10,
	ORG_NRP = 11,
	NEWS = 12,
	DEPARTMENT = 13,
	MEGAFON = 14
}

export const commandsList = {
	say: COMMANDS.SAY,
	b: COMMANDS.NRP,
	me: COMMANDS.ME,
	do: COMMANDS.DO,
	try: COMMANDS.TRY,
	todo: COMMANDS.TODO,
	s: COMMANDS.SCREAM,
	w: COMMANDS.WHISPER,
	fb: COMMANDS.FACTION_NRP,
	rb: COMMANDS.FACTION_NRP,
	famb: COMMANDS.ORG_NRP,
	ffb: COMMANDS.ORG_NRP,
	fam: COMMANDS.ORG,
	ff: COMMANDS.ORG,
	f: COMMANDS.FACTION,
	r: COMMANDS.FACTION,
	news: COMMANDS.NEWS,
	d: COMMANDS.DEPARTMENT,
	m: COMMANDS.MEGAFON
};

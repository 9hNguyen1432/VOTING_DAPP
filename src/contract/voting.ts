export const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_voteId",
				"type": "uint256"
			},
			{
				"name": "_id",
				"type": "uint256"
			},
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_age",
				"type": "uint256"
			},
			{
				"name": "_description",
				"type": "string"
			}
		],
		"name": "addCandidate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"components": [
					{
						"name": "ID",
						"type": "uint256"
					},
					{
						"name": "name",
						"type": "string"
					},
					{
						"name": "age",
						"type": "uint256"
					},
					{
						"name": "description",
						"type": "string"
					},
					{
						"name": "voteCount",
						"type": "uint256"
					}
				],
				"name": "candidatesList",
				"type": "tuple[]"
			},
			{
				"name": "_start",
				"type": "uint256"
			},
			{
				"name": "_end",
				"type": "uint256"
			}
		],
		"name": "createVoting",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "uint256"
			},
			{
				"name": "candidateId",
				"type": "uint256"
			}
		],
		"name": "vote",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getAdmin",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getEnd",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getStart",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getTotalVoter",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "viewCandidatesList",
		"outputs": [
			{
				"components": [
					{
						"name": "ID",
						"type": "uint256"
					},
					{
						"name": "name",
						"type": "string"
					},
					{
						"name": "age",
						"type": "uint256"
					},
					{
						"name": "description",
						"type": "string"
					},
					{
						"name": "voteCount",
						"type": "uint256"
					}
				],
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
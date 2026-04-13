import "@servicenow/sdk/global";

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "cs0": {
                            "table": "sys_script_client",
                            "id": "811f4079a7db40d9b18ae12e7b1547b0"
                        },
                        "src_server_script_ts": {
                            "table": "sys_module",
                            "id": "f9ecaaf4b1914a38abf284c5d12c8118"
                        },
                        "br0": {
                            "table": "sys_script",
                            "id": "9fa8d9da46834f1896baee99df13310a"
                        },
                        "package_json": {
                            "table": "sys_module",
                            "id": "ab9c6203b4b04de6b04e9a3229f43e7d"
                        }
                    };
                composite: [
                        {
                            "table": "sys_module",
                            "id": "a3b133032d7a440a82745daaddfd9fe0",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "index.js"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "3c3c75f0724a45eca18eb780ed57b473",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "cyclonedx/bom.json"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "e6d60bdbe5014928a54a86daa204b220",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "package.json"
                            }
                        }
                    ];
            }
        }
    }
}

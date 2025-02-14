import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: 'c8a61038294c4d6ab86afae2262d3bf4'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: '60982b9f03b74d00bdbfa99e1b797aa3'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '7656cf68119b4e7f8db6da097c00dba7'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'a1085d03d4254f35bebd90fbdd90ee6d'
                    }
                }
            }
        }
    }
}

  
const register = require('@babel/register').default;

register({ extensions: ['.ts', '.tsx', '.js', '.jsx'],
            plugins: [
                ["transform-class-properties", { "spec": true }],
                ["@babel/plugin-transform-runtime", {"regenerator": true}]
            ]
        });
export type Secret = {
    jwtSecret: string | undefined;
    jwtExpire: string | undefined;
    dbUrl: string | undefined;
};

export type envSecrets = {
    stage: string;
    nodeEnv: string | undefined;
    port: number;
    secret: Secret;
};

import WalletConnectProvider from "@walletconnect/web3-provider";
import { providers, utils, constants, getDefaultProvider } from "ethers";
import { getDefaultRPCURL } from "@/utils/helpers.js";

export default {
  state: {
    provider: null,
    metamaskProvider: null,
    signer: null,
    account: null,
    chainId: null,
    walletProviderName: false,
    isWalletConnected: false,
  },
  mutations: {
    setProvider(state, payload) {
      state.provider = payload;
    },
    setMetamaskProvider(state, payload) {
      state.metamaskProvider = payload;
    },
    setSigner(state, payload) {
      state.signer = payload;
    },
    setAccount(state, payload) {
      state.account = payload;
    },
    setChainId(state, payload) {
      state.chainId = payload;
    },
    setWalletConnection(state, payload) {
      state.isWalletConnected = payload;
    },
    setWalletProviderName(state, payload) {
      state.walletProviderName = payload;
    },
  },
  actions: {
    async connectProvider({ commit }) {
      const walletType = localStorage.getItem("walletType");
      const provider = new providers.JsonRpcProvider(getDefaultRPCURL());
      const defaultChainId = utils.hexlify(
        (await provider.getNetwork()).chainId
      );
      commit("setWalletProviderName", "Default");
      commit("setChainId", defaultChainId);
      commit("setProvider", provider);
      commit("setSigner", provider);
      commit("setAccount", constants.AddressZero);
      if (walletType === "walletConnect") {
        const walletConnectProvider = new WalletConnectProvider({
          rpc: {
            43113: "https://api.avax-test.network/ext/bc/C/rpc",
            43114: getDefaultRPCURL(),
          },
        });
        const connector = walletConnectProvider.connector;
        if (connector.accounts > 0) {
          const accounts = await walletConnectProvider.enable();
          const provider = new providers.Web3Provider(walletConnectProvider);
          const chainId = utils.hexlify(connector.chainId);
          const signer = provider.getSigner();
          commit("setWalletProviderName", "WalletConnect");
          commit("setChainId", chainId);
          commit("setProvider", provider);
          commit("setAccount", accounts[0]);
          commit("setSigner", signer);
          commit("setWalletConnection", true);
          return signer;
        }
        delete window.localStorage.walletType;
      }
      if (walletType === "Metamask") {
        if (window.ethereum) {
          const provider = await new providers.Web3Provider(window.ethereum);
          const accounts = await window.ethereum.request({
            method: "eth_accounts",
          });
          if (accounts.length > 0) {
            const signer = provider.getSigner();
            const defaultProvider = getDefaultProvider(getDefaultRPCURL());
            const chainId = await window.ethereum.request({
              method: "eth_chainId",
            });
            commit("setWalletProviderName", "Metamask");
            commit("setChainId", chainId);
            commit("setAccount", accounts[0]);
            commit("setProvider", defaultProvider);
            commit("setMetamaskProvider", provider);
            commit("setSigner", signer);
            commit("setWalletConnection", true);
            return signer;
          }
        }
        delete window.localStorage.walletType;
      }
      return provider;
    },

    async fetchMetamaskChain({ commit }, provider) {
      const chainId = await provider.request({ method: "eth_chainId" });

      if (chainId) {
        commit("setChainId", chainId);
        return chainId;
      }

      return false;
    },

    async connectMetamask({ commit }) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        if (accounts.length === 0) {
          // MetaMask is locked or the user has not connected any accounts
          console.log("Please connect to MetaMask.");
          return false;
        }

        const chainId = await window.ethereum.request({
          method: "eth_chainId",
        });
        const provider = await new providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        if (chainId) {
          commit("setChainId", chainId);
          commit("setWalletProviderName", "Metamask");
          commit("setProvider", provider);
          commit("setSigner", signer);
          commit("setAccount", accounts[0]);
          commit("setWalletConnection", true);
          localStorage.setItem("walletType", "Metamask");
          return true;
        }
        return false;
      } catch (err) {
        if (err.code === 4001) {
          // EIP-1193 userRejectedRequest error
          // If this happens, the user rejected the connection request.
          console.log("Please connect to WebSite.");
        } else {
          console.error(err);
        }
        return false;
      }
    },
    async connectWalletConnect({ commit }) {
      try {
        const walletConnectProvider = new WalletConnectProvider({
          rpc: {
            43113: "https://api.avax-test.network/ext/bc/C/rpc",
            43114: getDefaultRPCURL(),
          },
        });
        const accounts = await walletConnectProvider.enable();
        const provider = new providers.Web3Provider(walletConnectProvider);
        commit("setProvider", provider);
        const signer = await provider.getSigner();
        commit("setSigner", signer);
        const chainId = utils.hexlify((await provider.getNetwork()).chainId);
        if (chainId) {
          commit("setChainId", chainId);
          commit("setWalletProviderName", "WalletConnect");
          commit("setWalletConnection", true);
          commit("setAccount", accounts[0]);
          localStorage.setItem("walletType", "walletConnect");
          return true;
        }
        return false;
      } catch (err) {
        if (err.code === 4001) {
          // EIP-1193 userRejectedRequest error
          // If this happens, the user rejected the connection request.
          console.log("Please connect to WebSite.");
        } else {
          console.error(err);
        }
        return false;
      }
    },
  },
  getters: {
    getProvider: (state) => state.provider,
    getMetamaskProvider: (state) => state.metamaskProvider,
    getSigner: (state) => state.signer,
    getAccount: (state) => state.account,
    getChainId: (state) => state.chainId,
    getWalletIsConnected: (state) => state.isWalletConnected,
    getWalletProviderName: (state) => state.walletProviderName,
  },
};

import { DeployFunction } from "hardhat-deploy/dist/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import "@nomiclabs/hardhat-etherscan";

const func: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment,
): Promise<void> {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("AllocationPool", {
    from: deployer,
    log: true,
    args: [],
  });
};

func.tags = ["AllocationPool"];
export default func;

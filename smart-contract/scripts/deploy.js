const main = async () => {
  const dogeFactory = await hre.ethers.getContractFactory('DogeCoin')
  const dogeContract = await dogeFactory.deploy()
  await dogeContract.deployed()
  console.log('Dogecoin deployed to: ', dogeContract.address)

  const linkFactory = await hre.ethers.getContractFactory('Link')
  const linkContract = await linkFactory.deploy()
  await linkContract.deployed()
  
}
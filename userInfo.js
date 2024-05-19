function createUserProfiles(originalNames, modifiedNames) {
  if (originalNames.length !== modifiedNames.length) {
    return "Arrays must have the same length";
  }

  const userProfiles = [];

  for (let i = 0; i < originalNames.length; i++) {
    const userProfile = {
      id: i + 1,
      originalName: originalNames[i],
      modifiedName: modifiedNames[i],
    };
    userProfiles.push(userProfile);
  }

  return userProfiles;
}
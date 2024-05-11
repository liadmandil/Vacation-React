

const AddVacationQuery = ()=>{
    return 'INSERT INTO `project-vacation`.`vacations` (`description`, `destination`, `image`, `from_date`, `to_date`, `price`) VALUES (?,?,?,?,?,?);'
}

const deleteVacationQuery = ()=>{
    return "DELETE FROM `project-vacation`.`vacations` WHERE (`id` = ?);"
}

const getAllLikedVacationsQuery = ()=>{
  return "SELECT * FROM `project-vacation`.vacations WHERE follower_num > 0;"
}

const getCurrentVacationQuery = ()=>{
  return "SELECT * FROM `project-vacation`.vacations WHERE id = ?;"
}

const editVacationQuery = ()=>{
  return "UPDATE `project-vacation`.`vacations` SET `description` = ?, `destination` = ?, `image` = ? , `from_date` = ?, `to_date` = ?, `price` = ? WHERE (`id` = ?);"
}

export {AddVacationQuery, deleteVacationQuery, getAllLikedVacationsQuery, getCurrentVacationQuery, editVacationQuery}
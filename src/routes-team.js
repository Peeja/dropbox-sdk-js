// Auto-generated by Stone, do not modify.
var routes = {};

/**
 * Creates a new, empty group, with a requested name. Permission : Team member
 * management
 * @function DropboxTeam#teamAlphaGroupsCreate
 * @arg {Object} arg - The request parameters.
 * @arg {String} arg.group_name - Group name.
 * @arg {String|null} arg.group_external_id - The creator of a team can
 * associate an arbitrary external ID to the group.
 * @arg {Object} arg.group_management_type - Whether the team can be managed by
 * selected users, or only by team admins
 * @returns {Object}
 */
routes.teamAlphaGroupsCreate = function (arg) {
  return this.request('team/alpha/groups/create', arg, 'api', 'rpc');
};

/**
 * Retrieves information about one or more groups. Permission : Team Information
 * @function DropboxTeam#teamAlphaGroupsGetInfo
 * @arg {Object} arg - The request parameters.
 * @arg {Array} arg.group_ids - List of group IDs.
 * @arg {Array} arg.group_external_ids - List of external IDs of groups.
 * @returns {Object}
 */
routes.teamAlphaGroupsGetInfo = function (arg) {
  return this.request('team/alpha/groups/get_info', arg, 'api', 'rpc');
};

/**
 * Lists groups on a team. Permission : Team Information
 * @function DropboxTeam#teamAlphaGroupsList
 * @arg {Object} arg - The request parameters.
 * @arg {Number} arg.limit - Number of results to return per call.
 * @returns {Object}
 */
routes.teamAlphaGroupsList = function (arg) {
  return this.request('team/alpha/groups/list', arg, 'api', 'rpc');
};

/**
 * Once a cursor has been retrieved from alpha/groups/list, use this to paginate
 * through all groups. Permission : Team information
 * @function DropboxTeam#teamAlphaGroupsListContinue
 * @arg {Object} arg - The request parameters.
 * @arg {String} arg.cursor - Indicates from what point to get the next set of
 * groups.
 * @returns {Object}
 */
routes.teamAlphaGroupsListContinue = function (arg) {
  return this.request('team/alpha/groups/list/continue', arg, 'api', 'rpc');
};

/**
 * Updates a group's name, external ID or management type. Permission : Team
 * member management
 * @function DropboxTeam#teamAlphaGroupsUpdate
 * @arg {Object} arg - The request parameters.
 * @arg {Object} arg.group - Specify a group.
 * @arg {Boolean} arg.return_members - Whether to return the list of members in
 * the group.  Note that the default value will cause all the group members  to
 * be returned in the response. This may take a long time for large groups.
 * @arg {String|null} arg.new_group_name - Optional argument. Set group name to
 * this if provided.
 * @arg {String|null} arg.new_group_external_id - Optional argument. New group
 * external ID. If the argument is None, the group's external_id won't be
 * updated. If the argument is empty string, the group's external id will be
 * cleared.
 * @arg {Object|null} arg.new_group_management_type - Set new group management
 * type, if provided.
 * @returns {Object}
 */
routes.teamAlphaGroupsUpdate = function (arg) {
  return this.request('team/alpha/groups/update', arg, 'api', 'rpc');
};

/**
 * List all device sessions of a team's member.
 * @function DropboxTeam#teamDevicesListMemberDevices
 * @arg {Object} arg - The request parameters.
 * @arg {String} arg.team_member_id - The team's member id
 * @arg {Boolean} arg.include_web_sessions - Whether to list web sessions of the
 * team's member
 * @arg {Boolean} arg.include_desktop_clients - Whether to list linked desktop
 * devices of the team's member
 * @arg {Boolean} arg.include_mobile_clients - Whether to list linked mobile
 * devices of the team's member
 * @returns {Object}
 */
routes.teamDevicesListMemberDevices = function (arg) {
  return this.request('team/devices/list_member_devices', arg, 'api', 'rpc');
};

/**
 * List all device sessions of a team.
 * @function DropboxTeam#teamDevicesListMembersDevices
 * @arg {Object} arg - The request parameters.
 * @arg {String|null} arg.cursor - At the first call to the
 * devices/list_members_devices the cursor shouldn't be passed. Then, if the
 * result of the call includes a cursor, the following requests should include
 * the received cursors in order to receive the next sub list of team devices
 * @arg {Boolean} arg.include_web_sessions - Whether to list web sessions of the
 * team members
 * @arg {Boolean} arg.include_desktop_clients - Whether to list desktop clients
 * of the team members
 * @arg {Boolean} arg.include_mobile_clients - Whether to list mobile clients of
 * the team members
 * @returns {Object}
 */
routes.teamDevicesListMembersDevices = function (arg) {
  return this.request('team/devices/list_members_devices', arg, 'api', 'rpc');
};

/**
 * List all device sessions of a team.
 * @function DropboxTeam#teamDevicesListTeamDevices
 * @deprecated
 * @arg {Object} arg - The request parameters.
 * @arg {String|null} arg.cursor - At the first call to the
 * devices/list_team_devices the cursor shouldn't be passed. Then, if the result
 * of the call includes a cursor, the following requests should include the
 * received cursors in order to receive the next sub list of team devices
 * @arg {Boolean} arg.include_web_sessions - Whether to list web sessions of the
 * team members
 * @arg {Boolean} arg.include_desktop_clients - Whether to list desktop clients
 * of the team members
 * @arg {Boolean} arg.include_mobile_clients - Whether to list mobile clients of
 * the team members
 * @returns {Object}
 */
routes.teamDevicesListTeamDevices = function (arg) {
  return this.request('team/devices/list_team_devices', arg, 'api', 'rpc');
};

/**
 * Revoke a device session of a team's member
 * @function DropboxTeam#teamDevicesRevokeDeviceSession
 * @arg {Object} arg - The request parameters.
 * @arg {Object} arg.web_session - End an active session
 * @arg {Object} arg.desktop_client - Unlink a linked desktop device
 * @arg {Object} arg.mobile_client - Unlink a linked mobile device
 * @returns {null}
 */
routes.teamDevicesRevokeDeviceSession = function (arg) {
  return this.request('team/devices/revoke_device_session', arg, 'api', 'rpc');
};

/**
 * Revoke a list of device sessions of team members
 * @function DropboxTeam#teamDevicesRevokeDeviceSessionBatch
 * @arg {Object} arg - The request parameters.
 * @arg {Array} arg.revoke_devices
 * @returns {Object}
 */
routes.teamDevicesRevokeDeviceSessionBatch = function (arg) {
  return this.request('team/devices/revoke_device_session_batch', arg, 'api', 'rpc');
};

/**
 * Retrieves information about a team.
 * @function DropboxTeam#teamGetInfo
 * @arg {null} arg - The request parameters.
 * @returns {Object}
 */
routes.teamGetInfo = function (arg) {
  return this.request('team/get_info', arg, 'api', 'rpc');
};

/**
 * Creates a new, empty group, with a requested name. Permission : Team member
 * management
 * @function DropboxTeam#teamGroupsCreate
 * @arg {Object} arg - The request parameters.
 * @arg {String} arg.group_name - Group name.
 * @arg {String|null} arg.group_external_id - The creator of a team can
 * associate an arbitrary external ID to the group.
 * @returns {Object}
 */
routes.teamGroupsCreate = function (arg) {
  return this.request('team/groups/create', arg, 'api', 'rpc');
};

/**
 * Deletes a group. The group is deleted immediately. However the revoking of
 * group-owned resources may take additional time. Use the groups/job_status/get
 * to determine whether this process has completed. Permission : Team member
 * management
 * @function DropboxTeam#teamGroupsDelete
 * @arg {Object} arg - The request parameters.
 * @arg {String} arg.group_id - Group ID.
 * @arg {String} arg.group_external_id - External ID of the group.
 * @returns {Object}
 */
routes.teamGroupsDelete = function (arg) {
  return this.request('team/groups/delete', arg, 'api', 'rpc');
};

/**
 * Retrieves information about one or more groups. Permission : Team Information
 * @function DropboxTeam#teamGroupsGetInfo
 * @arg {Object} arg - The request parameters.
 * @arg {Array} arg.group_ids - List of group IDs.
 * @arg {Array} arg.group_external_ids - List of external IDs of groups.
 * @returns {Object}
 */
routes.teamGroupsGetInfo = function (arg) {
  return this.request('team/groups/get_info', arg, 'api', 'rpc');
};

/**
 * Once an async_job_id is returned from groups/delete, groups/members/add , or
 * groups/members/remove use this method to poll the status of granting/revoking
 * group members' access to group-owned resources. Permission : Team member
 * management
 * @function DropboxTeam#teamGroupsJobStatusGet
 * @arg {Object} arg - The request parameters.
 * @arg {String} arg.async_job_id - Id of the asynchronous job. This is the
 * value of a response returned from the method that launched the job.
 * @returns {Object}
 */
routes.teamGroupsJobStatusGet = function (arg) {
  return this.request('team/groups/job_status/get', arg, 'api', 'rpc');
};

/**
 * Lists groups on a team. Permission : Team Information
 * @function DropboxTeam#teamGroupsList
 * @arg {Object} arg - The request parameters.
 * @arg {Number} arg.limit - Number of results to return per call.
 * @returns {Object}
 */
routes.teamGroupsList = function (arg) {
  return this.request('team/groups/list', arg, 'api', 'rpc');
};

/**
 * Once a cursor has been retrieved from groups/list, use this to paginate
 * through all groups. Permission : Team information
 * @function DropboxTeam#teamGroupsListContinue
 * @arg {Object} arg - The request parameters.
 * @arg {String} arg.cursor - Indicates from what point to get the next set of
 * groups.
 * @returns {Object}
 */
routes.teamGroupsListContinue = function (arg) {
  return this.request('team/groups/list/continue', arg, 'api', 'rpc');
};

/**
 * Adds members to a group. The members are added immediately. However the
 * granting of group-owned resources may take additional time. Use the
 * groups/job_status/get to determine whether this process has completed.
 * Permission : Team member management
 * @function DropboxTeam#teamGroupsMembersAdd
 * @arg {Object} arg - The request parameters.
 * @arg {Object} arg.group - Group to which users will be added.
 * @arg {Array} arg.members - List of users to be added to the group.
 * @arg {Boolean} arg.return_members - Whether to return the list of members in
 * the group.  Note that the default value will cause all the group members  to
 * be returned in the response. This may take a long time for large groups.
 * @returns {Object}
 */
routes.teamGroupsMembersAdd = function (arg) {
  return this.request('team/groups/members/add', arg, 'api', 'rpc');
};

/**
 * Lists members of a group. Permission : Team Information
 * @function DropboxTeam#teamGroupsMembersList
 * @arg {Object} arg - The request parameters.
 * @arg {Object} arg.group - The group whose members are to be listed.
 * @arg {Number} arg.limit - Number of results to return per call.
 * @returns {Object}
 */
routes.teamGroupsMembersList = function (arg) {
  return this.request('team/groups/members/list', arg, 'api', 'rpc');
};

/**
 * Once a cursor has been retrieved from groups/members/list, use this to
 * paginate through all members of the group. Permission : Team information
 * @function DropboxTeam#teamGroupsMembersListContinue
 * @arg {Object} arg - The request parameters.
 * @arg {String} arg.cursor - Indicates from what point to get the next set of
 * groups.
 * @returns {Object}
 */
routes.teamGroupsMembersListContinue = function (arg) {
  return this.request('team/groups/members/list/continue', arg, 'api', 'rpc');
};

/**
 * Removes members from a group. The members are removed immediately. However
 * the revoking of group-owned resources may take additional time. Use the
 * groups/job_status/get to determine whether this process has completed.
 * Permission : Team member management
 * @function DropboxTeam#teamGroupsMembersRemove
 * @arg {Object} arg - The request parameters.
 * @arg {Object} arg.group - Group from which users will be removed.
 * @arg {Array} arg.users - List of users to be removed from the group.
 * @arg {Boolean} arg.return_members - Whether to return the list of members in
 * the group.  Note that the default value will cause all the group members  to
 * be returned in the response. This may take a long time for large groups.
 * @returns {Object}
 */
routes.teamGroupsMembersRemove = function (arg) {
  return this.request('team/groups/members/remove', arg, 'api', 'rpc');
};

/**
 * Sets a member's access type in a group. Permission : Team member management
 * @function DropboxTeam#teamGroupsMembersSetAccessType
 * @arg {Object} arg - The request parameters.
 * @arg {Object} arg.group - Specify a group.
 * @arg {Object} arg.user - Identity of a user that is a member of group.
 * @arg {Object} arg.access_type - New group access type the user will have.
 * @arg {Boolean} arg.return_members - Whether to return the list of members in
 * the group.  Note that the default value will cause all the group members  to
 * be returned in the response. This may take a long time for large groups.
 * @returns {Object}
 */
routes.teamGroupsMembersSetAccessType = function (arg) {
  return this.request('team/groups/members/set_access_type', arg, 'api', 'rpc');
};

/**
 * Updates a group's name and/or external ID. Permission : Team member
 * management
 * @function DropboxTeam#teamGroupsUpdate
 * @arg {Object} arg - The request parameters.
 * @arg {Object} arg.group - Specify a group.
 * @arg {Boolean} arg.return_members - Whether to return the list of members in
 * the group.  Note that the default value will cause all the group members  to
 * be returned in the response. This may take a long time for large groups.
 * @arg {String|null} arg.new_group_name - Optional argument. Set group name to
 * this if provided.
 * @arg {String|null} arg.new_group_external_id - Optional argument. New group
 * external ID. If the argument is None, the group's external_id won't be
 * updated. If the argument is empty string, the group's external id will be
 * cleared.
 * @returns {Object}
 */
routes.teamGroupsUpdate = function (arg) {
  return this.request('team/groups/update', arg, 'api', 'rpc');
};

/**
 * List all linked applications of the team member. Note, this endpoint does not
 * list any team-linked applications.
 * @function DropboxTeam#teamLinkedAppsListMemberLinkedApps
 * @arg {Object} arg - The request parameters.
 * @arg {String} arg.team_member_id - The team member id
 * @returns {Object}
 */
routes.teamLinkedAppsListMemberLinkedApps = function (arg) {
  return this.request('team/linked_apps/list_member_linked_apps', arg, 'api', 'rpc');
};

/**
 * List all applications linked to the team members' accounts. Note, this
 * endpoint does not list any team-linked applications.
 * @function DropboxTeam#teamLinkedAppsListMembersLinkedApps
 * @arg {Object} arg - The request parameters.
 * @arg {String|null} arg.cursor - At the first call to the
 * linked_apps/list_members_linked_apps the cursor shouldn't be passed. Then, if
 * the result of the call includes a cursor, the following requests should
 * include the received cursors in order to receive the next sub list of the
 * team applications
 * @returns {Object}
 */
routes.teamLinkedAppsListMembersLinkedApps = function (arg) {
  return this.request('team/linked_apps/list_members_linked_apps', arg, 'api', 'rpc');
};

/**
 * List all applications linked to the team members' accounts. Note, this
 * endpoint doesn't list any team-linked applications.
 * @function DropboxTeam#teamLinkedAppsListTeamLinkedApps
 * @deprecated
 * @arg {Object} arg - The request parameters.
 * @arg {String|null} arg.cursor - At the first call to the
 * linked_apps/list_team_linked_apps the cursor shouldn't be passed. Then, if
 * the result of the call includes a cursor, the following requests should
 * include the received cursors in order to receive the next sub list of the
 * team applications
 * @returns {Object}
 */
routes.teamLinkedAppsListTeamLinkedApps = function (arg) {
  return this.request('team/linked_apps/list_team_linked_apps', arg, 'api', 'rpc');
};

/**
 * Revoke a linked application of the team member
 * @function DropboxTeam#teamLinkedAppsRevokeLinkedApp
 * @arg {Object} arg - The request parameters.
 * @arg {String} arg.app_id - The application's unique id
 * @arg {String} arg.team_member_id - The unique id of the member owning the
 * device
 * @arg {Boolean} arg.keep_app_folder - Whether to keep the application
 * dedicated folder (in case the application uses  one)
 * @returns {null}
 */
routes.teamLinkedAppsRevokeLinkedApp = function (arg) {
  return this.request('team/linked_apps/revoke_linked_app', arg, 'api', 'rpc');
};

/**
 * Revoke a list of linked applications of the team members
 * @function DropboxTeam#teamLinkedAppsRevokeLinkedAppBatch
 * @arg {Object} arg - The request parameters.
 * @arg {Array} arg.revoke_linked_app
 * @returns {Object}
 */
routes.teamLinkedAppsRevokeLinkedAppBatch = function (arg) {
  return this.request('team/linked_apps/revoke_linked_app_batch', arg, 'api', 'rpc');
};

/**
 * Adds members to a team. Permission : Team member management A maximum of 20
 * members can be specified in a single call. If no Dropbox account exists with
 * the email address specified, a new Dropbox account will be created with the
 * given email address, and that account will be invited to the team. If a
 * personal Dropbox account exists with the email address specified in the call,
 * this call will create a placeholder Dropbox account for the user on the team
 * and send an email inviting the user to migrate their existing personal
 * account onto the team. Team member management apps are required to set an
 * initial given_name and surname for a user to use in the team invitation and
 * for 'Perform as team member' actions taken on the user before they become
 * 'active'.
 * @function DropboxTeam#teamMembersAdd
 * @arg {Object} arg - The request parameters.
 * @arg {Array} arg.new_members - Details of new members to be added to the
 * team.
 * @arg {Boolean} arg.force_async - Whether to force the add to happen
 * asynchronously.
 * @returns {Object}
 */
routes.teamMembersAdd = function (arg) {
  return this.request('team/members/add', arg, 'api', 'rpc');
};

/**
 * Once an async_job_id is returned from members/add , use this to poll the
 * status of the asynchronous request. Permission : Team member management
 * @function DropboxTeam#teamMembersAddJobStatusGet
 * @arg {Object} arg - The request parameters.
 * @arg {String} arg.async_job_id - Id of the asynchronous job. This is the
 * value of a response returned from the method that launched the job.
 * @returns {Object}
 */
routes.teamMembersAddJobStatusGet = function (arg) {
  return this.request('team/members/add/job_status/get', arg, 'api', 'rpc');
};

/**
 * Returns information about multiple team members. Permission : Team
 * information This endpoint will return MembersGetInfoItem.id_not_found, for
 * IDs (or emails) that cannot be matched to a valid team member.
 * @function DropboxTeam#teamMembersGetInfo
 * @arg {Object} arg - The request parameters.
 * @arg {Array} arg.members - List of team members.
 * @returns {Object}
 */
routes.teamMembersGetInfo = function (arg) {
  return this.request('team/members/get_info', arg, 'api', 'rpc');
};

/**
 * Lists members of a team. Permission : Team information
 * @function DropboxTeam#teamMembersList
 * @arg {Object} arg - The request parameters.
 * @arg {Number} arg.limit - Number of results to return per call.
 * @returns {Object}
 */
routes.teamMembersList = function (arg) {
  return this.request('team/members/list', arg, 'api', 'rpc');
};

/**
 * Once a cursor has been retrieved from members/list, use this to paginate
 * through all team members. Permission : Team information
 * @function DropboxTeam#teamMembersListContinue
 * @arg {Object} arg - The request parameters.
 * @arg {String} arg.cursor - Indicates from what point to get the next set of
 * members.
 * @returns {Object}
 */
routes.teamMembersListContinue = function (arg) {
  return this.request('team/members/list/continue', arg, 'api', 'rpc');
};

/**
 * Removes a member from a team. Permission : Team member management Exactly one
 * of team_member_id, email, or external_id must be provided to identify the
 * user account. This is not a deactivation where the account can be
 * re-activated again. Calling members/add with the removed user's email address
 * will create a new account with a new team_member_id that will not have access
 * to any content that was shared with the initial account. This endpoint may
 * initiate an asynchronous job. To obtain the final result of the job, the
 * client should periodically poll members/remove/job_status/get.
 * @function DropboxTeam#teamMembersRemove
 * @arg {Object} arg - The request parameters.
 * @arg {Object} arg.user - Identity of user to remove/suspend.
 * @arg {Boolean} arg.wipe_data - If provided, controls if the user's data will
 * be deleted on their linked devices.
 * @arg {Object|null} arg.transfer_dest_id - If provided, files from the deleted
 * member account will be transferred to this user.
 * @arg {Object|null} arg.transfer_admin_id - If provided, errors during the
 * transfer process will be sent via email to this user. If the transfer_dest_id
 * argument was provided, then this argument must be provided as well.
 * @arg {Boolean} arg.keep_account - Downgrade the member to a Basic account.
 * The user will retain the email address associated with their Dropbox  account
 * and data in their account that is not restricted to team members.
 * @returns {Object}
 */
routes.teamMembersRemove = function (arg) {
  return this.request('team/members/remove', arg, 'api', 'rpc');
};

/**
 * Once an async_job_id is returned from members/remove , use this to poll the
 * status of the asynchronous request. Permission : Team member management
 * @function DropboxTeam#teamMembersRemoveJobStatusGet
 * @arg {Object} arg - The request parameters.
 * @arg {String} arg.async_job_id - Id of the asynchronous job. This is the
 * value of a response returned from the method that launched the job.
 * @returns {Object}
 */
routes.teamMembersRemoveJobStatusGet = function (arg) {
  return this.request('team/members/remove/job_status/get', arg, 'api', 'rpc');
};

/**
 * Sends welcome email to pending team member. Permission : Team member
 * management Exactly one of team_member_id, email, or external_id must be
 * provided to identify the user account. No-op if team member is not pending.
 * @function DropboxTeam#teamMembersSendWelcomeEmail
 * @arg {Object} arg - The request parameters.
 * @arg {String} arg.team_member_id
 * @arg {String} arg.external_id
 * @arg {String} arg.email
 * @returns {null}
 */
routes.teamMembersSendWelcomeEmail = function (arg) {
  return this.request('team/members/send_welcome_email', arg, 'api', 'rpc');
};

/**
 * Updates a team member's permissions. Permission : Team member management
 * @function DropboxTeam#teamMembersSetAdminPermissions
 * @arg {Object} arg - The request parameters.
 * @arg {Object} arg.user - Identity of user whose role will be set.
 * @arg {Object} arg.new_role - The new role of the member.
 * @returns {Object}
 */
routes.teamMembersSetAdminPermissions = function (arg) {
  return this.request('team/members/set_admin_permissions', arg, 'api', 'rpc');
};

/**
 * Updates a team member's profile. Permission : Team member management
 * @function DropboxTeam#teamMembersSetProfile
 * @arg {Object} arg - The request parameters.
 * @arg {Object} arg.user - Identity of user whose profile will be set.
 * @arg {String|null} arg.new_email - New email for member.
 * @arg {String|null} arg.new_external_id - New external ID for member.
 * @arg {String|null} arg.new_given_name - New given name for member.
 * @arg {String|null} arg.new_surname - New surname for member.
 * @returns {Object}
 */
routes.teamMembersSetProfile = function (arg) {
  return this.request('team/members/set_profile', arg, 'api', 'rpc');
};

/**
 * Suspend a member from a team. Permission : Team member management Exactly one
 * of team_member_id, email, or external_id must be provided to identify the
 * user account.
 * @function DropboxTeam#teamMembersSuspend
 * @arg {Object} arg - The request parameters.
 * @arg {Object} arg.user - Identity of user to remove/suspend.
 * @arg {Boolean} arg.wipe_data - If provided, controls if the user's data will
 * be deleted on their linked devices.
 * @returns {null}
 */
routes.teamMembersSuspend = function (arg) {
  return this.request('team/members/suspend', arg, 'api', 'rpc');
};

/**
 * Unsuspend a member from a team. Permission : Team member management Exactly
 * one of team_member_id, email, or external_id must be provided to identify the
 * user account.
 * @function DropboxTeam#teamMembersUnsuspend
 * @arg {Object} arg - The request parameters.
 * @arg {Object} arg.user - Identity of user to unsuspend.
 * @returns {null}
 */
routes.teamMembersUnsuspend = function (arg) {
  return this.request('team/members/unsuspend', arg, 'api', 'rpc');
};

/**
 * Add a property template. See route files/properties/add to add properties to
 * a file.
 * @function DropboxTeam#teamPropertiesTemplateAdd
 * @arg {Object} arg - The request parameters.
 * @arg {String} arg.name - A display name for the property template. Property
 * template names can be up to 256 bytes.
 * @arg {String} arg.description - Description for new property template.
 * Property template descriptions can be up to 1024 bytes.
 * @arg {Array} arg.fields - This is a list of custom properties associated with
 * a property template. There can be up to 64 properties in a single property
 * template.
 * @returns {Object}
 */
routes.teamPropertiesTemplateAdd = function (arg) {
  return this.request('team/properties/template/add', arg, 'api', 'rpc');
};

/**
 * Get the schema for a specified template.
 * @function DropboxTeam#teamPropertiesTemplateGet
 * @arg {Object} arg - The request parameters.
 * @arg {String} arg.template_id - An identifier for property template added by
 * route properties/template/add.
 * @returns {Object}
 */
routes.teamPropertiesTemplateGet = function (arg) {
  return this.request('team/properties/template/get', arg, 'api', 'rpc');
};

/**
 * Get the property template identifiers for a team. To get the schema of each
 * template use properties/template/get.
 * @function DropboxTeam#teamPropertiesTemplateList
 * @arg {null} arg - The request parameters.
 * @returns {Object}
 */
routes.teamPropertiesTemplateList = function (arg) {
  return this.request('team/properties/template/list', arg, 'api', 'rpc');
};

/**
 * Update a property template. This route can update the template name, the
 * template description and add optional properties to templates.
 * @function DropboxTeam#teamPropertiesTemplateUpdate
 * @arg {Object} arg - The request parameters.
 * @arg {String} arg.template_id - An identifier for property template added by
 * properties/template/add.
 * @arg {String|null} arg.name - A display name for the property template.
 * Property template names can be up to 256 bytes.
 * @arg {String|null} arg.description - Description for new property template.
 * Property template descriptions can be up to 1024 bytes.
 * @arg {Array|null} arg.add_fields - This is a list of custom properties to add
 * to the property template. There can be up to 64 properties in a single
 * property template.
 * @returns {Object}
 */
routes.teamPropertiesTemplateUpdate = function (arg) {
  return this.request('team/properties/template/update', arg, 'api', 'rpc');
};

/**
 * Retrieves reporting data about a team's user activity.
 * @function DropboxTeam#teamReportsGetActivity
 * @arg {Object} arg - The request parameters.
 * @arg {Object|null} arg.start_date - Optional starting date (inclusive)
 * @arg {Object|null} arg.end_date - Optional ending date (exclusive)
 * @returns {Object}
 */
routes.teamReportsGetActivity = function (arg) {
  return this.request('team/reports/get_activity', arg, 'api', 'rpc');
};

/**
 * Retrieves reporting data about a team's linked devices.
 * @function DropboxTeam#teamReportsGetDevices
 * @arg {Object} arg - The request parameters.
 * @arg {Object|null} arg.start_date - Optional starting date (inclusive)
 * @arg {Object|null} arg.end_date - Optional ending date (exclusive)
 * @returns {Object}
 */
routes.teamReportsGetDevices = function (arg) {
  return this.request('team/reports/get_devices', arg, 'api', 'rpc');
};

/**
 * Retrieves reporting data about a team's membership.
 * @function DropboxTeam#teamReportsGetMembership
 * @arg {Object} arg - The request parameters.
 * @arg {Object|null} arg.start_date - Optional starting date (inclusive)
 * @arg {Object|null} arg.end_date - Optional ending date (exclusive)
 * @returns {Object}
 */
routes.teamReportsGetMembership = function (arg) {
  return this.request('team/reports/get_membership', arg, 'api', 'rpc');
};

/**
 * Retrieves reporting data about a team's storage usage.
 * @function DropboxTeam#teamReportsGetStorage
 * @arg {Object} arg - The request parameters.
 * @arg {Object|null} arg.start_date - Optional starting date (inclusive)
 * @arg {Object|null} arg.end_date - Optional ending date (exclusive)
 * @returns {Object}
 */
routes.teamReportsGetStorage = function (arg) {
  return this.request('team/reports/get_storage', arg, 'api', 'rpc');
};

module.exports = routes;
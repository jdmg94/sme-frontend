/**
 * @Author: JoseMunoz
 * @Date:   2018-08-01T10:13:39-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-08-01T10:14:39-06:00
 */
export const mergeProps = (stateProps, dispatchProps, ownProps) => ({
	...stateProps,
	...dispatchProps,
	...ownProps
});

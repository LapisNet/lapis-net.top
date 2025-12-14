type DataName = 'news' | 'members' | 'projects' | 'projects_v2' | 'contacts' | 'links';
type DataReturns = Promise<string> | Project<Array> | Promise<Member[]> | Promise<Project[]> | Promise<ProjectV2[]>;

type Project = {
	/**
	 * 状态
	 * @default 'unknown'
	 */
	_status?: 'unknown' | 'wip' | 'normal' | 'archived' | 'deprecated';
	/**
	 * 可见性
	 * @default true
	 */
	_show?: boolean;
	/** 项目名称/标题 */
	title: string;
	/** 副标题 */
	sub_title?: string;
	/** 信息行1 */
	info1?: string;
	/** 信息行2 */
	info2?: string;
	/**
	 * 仓库短链接
	 * @example 'username/repo'
	 */
	repo?: string;
	/**
	 * 仓库类型
	 * @default 'github.com'
	 */
	repo_type?: string;
	/** 许可证 */
	license?: string;
	/** 链接 */
	url?: string;
};

type ProjectV2 = {
	_status?: string,
	_show?: boolean,
	name: string | {
		current: string,
		previous?: string
	},
	desc: string,
	link?: string,
	repo?: string,
	license?: string,
	target: string,
	leader: {
		name: string,
		email?: string,
		url?: string,
		qq?: number,
	},
	next_release_at: string
};

type Member = {
	/**
	 * 可见性
	 * @default true
	 */
	_show?: boolean;
	/** 头像外链 */
	avatar: string | null;
	/** 昵称 */
	name: string;
	/** 别名 */
	aka?: string;
	/** 身份 */
	role: string;
	/** 个人主页 */
	url?: string;
};

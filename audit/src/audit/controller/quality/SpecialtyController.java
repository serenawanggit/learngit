package audit.controller.quality;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import audit.model.Organization;
import audit.model.Specialty;
import audit.service.quality.OrganizationServiceI;
import audit.service.quality.SpecialtyServiceI;

@Controller
@RequestMapping("specialtyController")
public class SpecialtyController {
	
	@Autowired
	private SpecialtyServiceI specialtyServiceI;
	@Autowired
	private OrganizationServiceI organizationService;
	/**
	 * 根据机构id查询code 再查询 专业对应JGDM（机构代码）
	 * @param request
	 * @param specialty
	 * @return
	 */
	@RequestMapping(value="selecSpecialtytByid",method=RequestMethod.POST)
	@ResponseBody
	public List<Specialty> selecSpecialtytByid(HttpServletRequest request
			){
		int oraganizationId=Integer.parseInt(request.getParameter("oraganizationId"));
		Organization organization = organizationService.selectByPrimaryKey(oraganizationId);
		List<Specialty> specialtyList = specialtyServiceI.selectByCode(organization.getCode());
		return specialtyList;
	}
}
